import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import LandingPage from "./pages/LandingPage";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        {/* Global Toast Notifications */}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 3000,
            style: {
              background: "#0f172a",
              color: "#f8fafc",
              border: "1px solid #1e293b",
            },
          }}
        />

        <Routes>
          {/* Public Landing Page & Client Lead Form */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/submit" element={<LandingPage />} />

          {/* Admin Login */}
          <Route path="/login" element={<LoginPage />} />

          {/* Protected Admin Routes matching the /admin requirement */}
          <Route element={<ProtectedRoute />}>
            <Route path="/admin" element={<DashboardPage />} />
            {/* Optional redirect so old dashboard links still work */}
            <Route
              path="/dashboard"
              element={<Navigate to="/admin" replace />}
            />
          </Route>

          {/* Custom 404 Not Found Page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
