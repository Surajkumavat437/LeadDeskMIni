import { createContext, useContext, useState, useEffect } from "react";
import api from "../api/axios";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check auth status when app mounts
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token =
          localStorage.getItem("authToken") ||
          sessionStorage.getItem("authToken");

        if (token) {
          api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        } else {
          setLoading(false);
          return;
        }

        const response = await api.get("/auth/me");

        // Safely extract user data from various possible response structures
        const userData =
          response.data?.user ||
          response.data?.data ||
          response.data?.admin ||
          response.data;

        if (userData && typeof userData === "object") {
          setUser(userData);
        }
      } catch (err) {
        console.warn("Session expired or no active session:", err.message);
        localStorage.removeItem("authToken");
        sessionStorage.removeItem("authToken");
        delete api.defaults.headers.common["Authorization"];
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = (userData, token, remember) => {
    // Ensure we have a valid user object to set
    const validUser = userData?.user || userData?.data || userData;
    setUser(validUser);

    if (token) {
      if (remember) {
        localStorage.setItem("authToken", token);
      } else {
        sessionStorage.setItem("authToken", token);
      }
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
  };

  const logout = async () => {
    try {
      await api.post("/auth/logout");
    } catch (e) {
      // Ignore network errors on logout
    }
    localStorage.removeItem("authToken");
    sessionStorage.removeItem("authToken");
    delete api.defaults.headers.common["Authorization"];
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {!loading ? (
        children
      ) : (
        <div className="flex h-screen items-center justify-center bg-slate-50 text-slate-500 text-sm font-medium">
          Restoring session...
        </div>
      )}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
