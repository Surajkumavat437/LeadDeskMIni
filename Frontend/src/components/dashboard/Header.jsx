import React from "react";
import { Menu, ChevronDown } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

export default function Header({ onMenuClick }) {
  const { user } = useAuth();

  return (
    <header className="flex h-16 items-center justify-between px-6 lg:px-10">
      <button
        onClick={onMenuClick}
        className="rounded-lg p-2 text-slate-600 hover:bg-white/80 lg:hidden"
      >
        <Menu size={20} />
      </button>

      <div className="ml-auto flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-600 uppercase">
          {user?.email?.charAt(0) || "A"}
        </div>
        <button className="flex items-center gap-1.5 text-sm font-semibold text-slate-700 hover:text-slate-900">
          Admin
          <ChevronDown size={16} className="text-slate-400" />
        </button>
      </div>
    </header>
  );
}
