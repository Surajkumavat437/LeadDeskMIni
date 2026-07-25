import React from "react";
import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 bg-white border-t border-indigo-50/60 scroll-mt-16"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="rounded-3xl bg-gradient-to-br from-indigo-900 via-slate-900 to-indigo-950 p-8 sm:p-12 lg:p-16 text-white shadow-2xl relative overflow-hidden">
          {/* Subtle Lighting Accent */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            {/* Left Column: Heading & Description */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">
                GET IN TOUCH
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                Have Questions? We’re Here to Help.
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md">
                Whether you want to inquire about a custom web application or
                get support with LeadDesk Mini, reach out to our team anytime.
              </p>

              <div className="pt-2">
                <a
                  href="#home"
                  className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-xs font-bold text-white shadow-lg shadow-indigo-600/30 transition hover:bg-indigo-500 active:scale-95"
                >
                  Submit Inquiry Now <ArrowRight size={16} />
                </a>
              </div>
            </div>

            {/* Right Column: Contact Cards */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-lg">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-400">
                  <Mail size={20} />
                </div>
                <h4 className="mt-3 text-sm font-bold text-white">Email Us</h4>
                <p className="mt-1 text-xs text-slate-300">
                  hello@leaddeskmini.com
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-lg">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-400">
                  <Phone size={20} />
                </div>
                <h4 className="mt-3 text-sm font-bold text-white">Call Us</h4>
                <p className="mt-1 text-xs text-slate-300">+91 98765 43210</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-lg">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-400">
                  <MapPin size={20} />
                </div>
                <h4 className="mt-3 text-sm font-bold text-white">Location</h4>
                <p className="mt-1 text-xs text-slate-300">
                  Bengaluru, Karnataka, India
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-lg">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-400">
                  <Clock size={20} />
                </div>
                <h4 className="mt-3 text-sm font-bold text-white">
                  Working Hours
                </h4>
                <p className="mt-1 text-xs text-slate-300">
                  Mon - Sat: 9am - 7pm IST
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
