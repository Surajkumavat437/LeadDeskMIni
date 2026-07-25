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
        }

        const response = await api.get("/auth/me");

        // FIX: Check for response.data.user OR response.data.data
        const userData = response.data?.user || response.data?.data;

        if (userData) {
          setUser(userData);
        }
      } catch (err) {
        console.warn("Session expired or no active session.");
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
    setUser(userData);
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
