import React from "react";
import { Edit, MessageCircle, CheckCircle2 } from "lucide-react";

const STEPS = [
  {
    number: "01",
    icon: Edit,
    title: "Submit Your Lead",
    desc: "Share your project details using the form above.",
  },
  {
    number: "02",
    icon: MessageCircle,
    title: "We Get In Touch",
    desc: "Our team reviews your request and contacts you shortly.",
  },
  {
    number: "03",
    icon: CheckCircle2,
    title: "We Build Together",
    desc: "We discuss, plan, and build the perfect solution for you.",
  },
];

export default function ProcessSection() {
  return (
    <section
      id="how-it-works"
      className="py-16 bg-white/40 border-t border-indigo-50/60"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">
          OUR PROCESS
        </span>
        <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900">
          Simple Process, Clear Results
        </h2>
        <p className="mt-1 text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
          From your idea to a successful project in just three simple steps.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3 relative">
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-center text-center space-y-3"
              >
                <div className="relative flex items-center justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-100/80 text-indigo-600 shadow-md shadow-indigo-100">
                    <Icon size={24} />
                  </div>
                  <span className="absolute -top-2 -left-2 flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 text-[10px] font-bold text-white ring-4 ring-white">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-800">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-500 max-w-xs">{step.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
