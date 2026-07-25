import React from "react";
import { Shield, List, LogOut, Sparkles, ExternalLink } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

export default function Sidebar({ isOpen, onClose }) {
  const { logout } = useAuth();

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-20 bg-slate-900/20 backdrop-blur-sm lg:hidden"
          onClick={onClose}
        />
      )}
      <aside
        className={`fixed inset-y-0 left-0 z-30 flex w-64 flex-col justify-between bg-[#F1F3FE]/80 backdrop-blur-md p-6 transition-transform duration-300 lg:static lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="space-y-8">
          <div className="flex items-center gap-2.5 px-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-md shadow-indigo-200">
              <Shield size={20} />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-800">
              LeadDesk <span className="text-indigo-600">Mini</span>
            </span>
          </div>

          <nav className="space-y-2">
            <button className="flex w-full items-center gap-3 rounded-2xl bg-indigo-100/80 px-4 py-3 text-sm font-semibold text-indigo-600 transition">
              <List size={18} />
              Leads
            </button>
            <button
              onClick={logout}
              className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-slate-600 transition hover:bg-white/60 hover:text-slate-900"
            >
              <LogOut size={18} />
              Logout
            </button>
          </nav>
        </div>

        <div className="rounded-2xl border border-indigo-100/60 bg-indigo-50/50 p-4 backdrop-blur-sm">
          <div className="flex items-start gap-2.5">
            <Sparkles size={16} className="mt-0.5 text-indigo-600 shrink-0" />
            <div className="text-xs">
              <p className="text-slate-500">Built for</p>
              <p className="font-semibold text-indigo-600">Digital Heroes</p>
              <p className="text-slate-500">Training Task</p>
            </div>
          </div>
          <a
            href="https://digitalheroesco.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex items-center gap-1 text-xs font-semibold text-indigo-600 hover:underline"
          >
            digitalheroesco.com
            <ExternalLink size={12} />
          </a>
        </div>
      </aside>
    </>
  );
}
