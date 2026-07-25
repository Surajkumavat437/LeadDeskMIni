import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LoginCard from "../features/auth/LoginCard";

export default function LoginPage() {
  const navigate = useNavigate();

  const handleAuthSuccess = (response) => {
    // Navigates smoothly without a full page reload
    navigate("/dashboard");
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#f7f8ff] flex flex-col items-center justify-between p-4 sm:p-6 select-none">
      {/* Background Lighting Elements */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-[380px] w-[380px] sm:h-[480px] sm:w-[480px] rounded-full bg-[#7B7DFF]/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-36 -bottom-36 h-[420px] w-[420px] sm:h-[520px] sm:w-[520px] rounded-full bg-[#7B7DFF]/25 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.6),transparent_70%)]" />

      {/* Back to Home Button */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-6 left-6 z-20 flex items-center gap-2 rounded-xl bg-white/80 px-3.5 py-2 text-xs font-semibold text-slate-700 shadow-sm border border-slate-200/80 backdrop-blur-md hover:bg-white hover:text-indigo-600 transition-all"
        title="Go to Home"
      >
        <ArrowLeft size={14} />
        <span>Back</span>
      </button>

      <Header />

      <main className="relative z-10 w-full max-w-[380px] sm:max-w-[420px] my-auto">
        <LoginCard onSuccess={handleAuthSuccess} />
      </main>

      <Footer />
    </div>
  );
}
