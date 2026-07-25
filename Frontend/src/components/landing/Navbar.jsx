import React, { useState } from "react";
import { Shield, Lock } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("home");

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "How It Works", href: "#how-it-works", id: "how-it-works" },
    { name: "Why Us", href: "#why-us", id: "why-us" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/60 border-b border-indigo-100/40">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">
        {/* Brand Logo */}
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-md shadow-indigo-200">
            <Shield size={20} />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-800">
            LeadDesk <span className="text-indigo-600">Mini</span>
          </span>
        </div>

        {/* Navigation Links with dynamic active state */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
          {navLinks.map((link) => {
            const isActive = activeTab === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setActiveTab(link.id)}
                className={`transition-colors ${
                  isActive
                    ? "text-indigo-600 font-bold"
                    : "text-slate-600 hover:text-indigo-600"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Admin Login Button */}
        <Link
          to="/login"
          className="flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-xs font-bold text-white shadow-md shadow-indigo-200 transition hover:bg-indigo-700 active:scale-95"
        >
          <Lock size={14} />
          Admin Login
        </Link>
      </div>
    </header>
  );
}
