import React from "react";
import { Menu, LogOut } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function Header({ onMenuClick }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      toast.success("Logged out successfully");
      navigate("/login", { replace: true });
    } catch (err) {
      toast.error("Failed to logout");
    }
  };

  return (
    <header className="flex h-20 items-center justify-between px-8 lg:px-12 border-b border-slate-100 bg-white/80 backdrop-blur-md">
      <button
        onClick={onMenuClick}
        className="rounded-xl p-2.5 text-slate-600 hover:bg-slate-100 transition lg:hidden"
        title="Open Menu"
      >
        <Menu size={22} />
      </button>

      {/* Main container with generous, breath-taking spacing */}
      <div className="ml-auto flex items-center gap-6">
        <div className="flex items-center gap-3 py-1">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-50 border border-indigo-100 text-xs font-bold text-indigo-600 uppercase shadow-sm">
            {user?.email?.charAt(0) || "A"}
          </div>
          <span className="text-sm font-semibold text-slate-700 tracking-wide hidden sm:inline">
            {user?.email || "Admin"}
          </span>
        </div>

        {/* Separator line for luxury spacing */}
        <div className="hidden sm:block h-6 w-[1px] bg-slate-200/70" />

        <button
          onClick={handleLogout}
          className="flex items-center gap-2 rounded-2xl border border-red-200/80 bg-red-50/40 px-4 py-2 text-xs font-bold text-red-600 transition hover:bg-red-100/80 hover:shadow-sm"
        >
          <LogOut size={15} />
          Logout
        </button>
      </div>
    </header>
  );
}
