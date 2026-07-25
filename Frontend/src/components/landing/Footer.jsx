import React from "react";
import { Shield, Mail, Phone, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0B132B] text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10 space-y-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-600 text-white">
                <Shield size={18} />
              </div>
              <span className="text-lg font-bold tracking-tight text-white">
                LeadDesk <span className="text-indigo-400">Mini</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-xs">
              Helping businesses capture leads and close more deals with ease.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>
                <a href="#home" className="hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-white transition">
                  Why Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Get In Touch
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-indigo-400" />
                <span>hello@leaddeskmini.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-indigo-400" />
                <span>+91 98765 43210</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-slate-800 pt-6 text-xs text-slate-500 gap-4">
          <p>
            Built for{" "}
            <span className="font-semibold text-indigo-400">
              Digital Heroes
            </span>{" "}
            Training Task | © 2026 LeadDesk Mini. All rights reserved.
          </p>
          <a
            href="https://digitalheroesco.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 font-semibold text-indigo-400 hover:underline"
          >
            digitalheroesco.com
            <ExternalLink size={12} />
          </a>
        </div>
      </div>
    </footer>
  );
}
