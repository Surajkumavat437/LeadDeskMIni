import { useNavigate } from "react-router-dom";
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

      <Header />

      <main className="relative z-10 w-full max-w-[380px] sm:max-w-[420px] my-auto">
        <LoginCard onSuccess={handleAuthSuccess} />
      </main>

      <Footer />
    </div>
  );
}
