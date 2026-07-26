import { useState } from "react";
import { Lock, Mail, Shield, Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import FormInput from "../../components/ui/FormInput";
import { loginAdmin } from "../../api/auth";

export default function LoginCard() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const executeAuth = async (credentials) => {
    setLoading(true);
    setError(null);
    try {
      const data = await loginAdmin(credentials);
      const authUser = data.user ||
        data.data ||
        data.admin || {
          email: credentials.email,
        };
      const authToken = data.token || data.accessToken || null;

      // 1. Save state and token to global auth context
      login(authUser, authToken, credentials.remember);

      // 2. Redirect to dashboard on success
      navigate("/dashboard", { replace: true });
    } catch (err) {
      console.log("FULL ERROR:", err);
      console.log("ERR MESSAGE:", err.message);
      console.log("ERR CODE:", err.code);
      console.log("ERR RESPONSE:", err.response);
      console.log("ERR REQUEST:", err.request);

      const apiMessage =
        err.response?.data?.message ||
        err.message ||
        "Failed to connect to authentication server";

      setError(apiMessage);
    } finally {
      // GUARANTEES THE SPINNER STOPS NO MATTER WHAT HAPPENS
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    executeAuth(formData);
  };

  const handleDemoFill = () => {
    const demoPayload = {
      email: "admin@leaddesk.com",
      password: "DemoPassword123!",
      remember: true,
    };
    setFormData(demoPayload);
    executeAuth(demoPayload);
  };

  return (
    <div className="rounded-3xl border border-white/80 bg-white/85 p-6 sm:p-8 shadow-[0_20px_60px_-15px_rgba(99,102,241,0.15)] backdrop-blur-xl">
      <div className="mx-auto flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 shadow-inner">
        <Lock size={24} />
      </div>

      <h2 className="mt-3 text-center text-xl sm:text-2xl font-bold tracking-tight text-slate-800">
        Welcome Back
      </h2>
      <p className="mt-1 text-center text-xs sm:text-sm text-gray-500">
        Sign in to access your dashboard
      </p>

      {/* Backend API Error Alert */}
      {error && (
        <div className="mt-4 rounded-xl bg-red-50 border border-red-200/80 p-3 text-center text-xs font-semibold text-red-600">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="mt-5 space-y-3.5">
        <FormInput
          label="Email Address"
          type="email"
          placeholder="admin@leaddesk.com"
          icon={Mail}
          disabled={loading}
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />

        <FormInput
          label="Password"
          type="password"
          placeholder="Enter your password"
          icon={Lock}
          disabled={loading}
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />

        <div className="flex items-center justify-between text-xs pt-0.5">
          <label className="flex items-center gap-2 text-gray-600 cursor-pointer select-none">
            <input
              type="checkbox"
              name="remember"
              checked={formData.remember}
              onChange={handleChange}
              disabled={loading}
              className="h-3.5 w-3.5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            Remember me
          </label>
          <a
            href="#forgot"
            className="text-indigo-600 font-semibold hover:underline"
          >
            Forgot password?
          </a>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="mt-1 flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition hover:brightness-105 active:scale-[0.99] disabled:opacity-70"
        >
          {loading ? <Loader2 size={18} className="animate-spin" /> : "Sign In"}
        </button>
      </form>

      <div className="my-4 flex items-center gap-3">
        <div className="h-px flex-1 bg-gray-200" />
        <span className="text-xs text-gray-400">or</span>
        <div className="h-px flex-1 bg-gray-200" />
      </div>

      <button
        type="button"
        onClick={handleDemoFill}
        disabled={loading}
        className="flex h-10 w-full items-center justify-center gap-2 rounded-xl border border-indigo-200 bg-white text-xs font-semibold text-indigo-600 transition hover:bg-indigo-50 active:scale-[0.99] disabled:opacity-70"
      >
        <Shield size={16} />
        Login with Demo Account
      </button>
    </div>
  );
}
