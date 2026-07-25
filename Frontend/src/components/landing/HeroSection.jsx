import React from "react";
import { Zap, ShieldCheck, Award, Sparkles } from "lucide-react";
import LeadCaptureForm from "./LeadCaptureForm";

export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden py-12 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Left Column */}
          <div className="space-y-8 lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200/60 bg-indigo-50/80 px-3.5 py-1.5 text-xs font-bold text-indigo-600">
              <Sparkles size={14} />
              <span>Let's build something great together</span>
            </div>

            <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl leading-[1.15]">
              We Turn Your Ideas Into{" "}
              <span className="text-indigo-600 underline decoration-indigo-200 underline-offset-8">
                Real Results
              </span>
            </h1>

            <p className="max-w-xl text-base text-slate-600 leading-relaxed">
              Share your project details and our team will get back to you
              within 24 hours.
            </p>

            {/* Feature Cards Container (Cleaned: Removed duplicate id="why-us") */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-indigo-100/70 text-indigo-600">
                  <Zap size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    Quick Response
                  </h4>
                  <p className="text-xs text-slate-500">
                    We reply within 24 hours
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-indigo-100/70 text-indigo-600">
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    Trusted by Clients
                  </h4>
                  <p className="text-xs text-slate-500">
                    Hundreds of successful projects
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-indigo-100/70 text-indigo-600">
                  <Award size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    Quality Guarantee
                  </h4>
                  <p className="text-xs text-slate-500">
                    We deliver excellence every time
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column Form */}
          <div className="flex justify-center lg:col-span-5">
            <LeadCaptureForm />
          </div>
        </div>
      </div>
    </section>
  );
}
