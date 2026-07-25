import React from "react";
import Navbar from "../components/landing/Navbar";
import HeroSection from "../components/landing/HeroSection";
import ProcessSection from "../components/landing/ProcessSection";
import WhyUsSection from "../components/landing/WhyUsSection";
import ContactSection from "../components/landing/ContactSection";
import Footer from "../components/landing/Footer";

export default function LandingPage() {
  return (
    <div className="relative min-h-screen bg-[#F7F8FE] font-sans antialiased text-slate-800">
      <div className="pointer-events-none absolute -left-40 -top-40 h-[600px] w-[600px] rounded-full bg-indigo-200/30 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-[500px] w-[500px] rounded-full bg-indigo-100/40 blur-3xl" />

      <Navbar />
      <main>
        <HeroSection />
        <ProcessSection />
        <WhyUsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
