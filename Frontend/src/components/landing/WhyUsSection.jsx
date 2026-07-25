import React from "react";
import { ShieldCheck, Clock, Sparkles, TrendingUp, Cpu } from "lucide-react";

const FEATURES = [
  {
    icon: Clock,
    title: "Instant Lead Capture",
    desc: "Inquiries are captured in real-time, instantly notifying your team so no potential deal slips through the cracks.",
  },
  {
    icon: ShieldCheck,
    title: "Verified Admin Portal",
    desc: "Secure JWT authentication ensures only authorized team members can view and manage client data.",
  },
  {
    icon: TrendingUp,
    title: "Status Lifecycle Tracking",
    desc: "Easily transition leads from New to Contacted and Closed with single-click administrative controls.",
  },
  {
    icon: Cpu,
    title: "Blazing Fast Performance",
    desc: "Built on modern React and Node.js with MongoDB for microsecond query speeds and reliable uptime.",
  },
];

export default function WhyUsSection() {
  return (
    <section
      id="why-us"
      className="py-20 bg-gradient-to-b from-[#F7F8FE] to-white relative overflow-hidden scroll-mt-24"
    >
      {/* Background Subtle Accent */}
      <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-indigo-100/30 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 lg:px-10 relative z-10">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-indigo-200/60 bg-indigo-50 px-3 py-1 text-xs font-bold text-indigo-600">
            <Sparkles size={14} />
            <span>WHY CHOOSE LEADDESK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Designed for Speed, Simplicity & Conversions
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
            Everything you need to streamline client inquiries into actionable
            pipeline revenue without complex setup.
          </p>
        </div>

        {/* 2x2 Feature Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {FEATURES.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-3xl border border-slate-100 bg-white/80 p-8 shadow-xl shadow-indigo-100/30 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-2xl hover:shadow-indigo-100/50"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 transition group-hover:bg-indigo-600 group-hover:text-white">
                  <Icon size={22} />
                </div>
                <h3 className="mt-5 text-lg font-bold text-slate-800 group-hover:text-indigo-600 transition">
                  {feature.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-500 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
