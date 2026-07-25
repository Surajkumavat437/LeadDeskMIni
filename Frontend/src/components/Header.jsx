import { Shield } from "lucide-react";

export default function Header() {
  return (
    <header className="relative z-10 flex flex-col items-center pt-2 sm:pt-4">
      <div className="flex items-center gap-2.5">
        <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-md shadow-indigo-200">
          <Shield size={20} />
        </div>
        <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-800">
          LeadDesk <span className="text-indigo-600">Mini</span>
        </h1>
      </div>

      <div className="mt-2.5 flex items-center gap-3 w-48 sm:w-56">
        <div className="h-px flex-1 bg-gray-300/80" />
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
          Admin Login
        </p>
        <div className="h-px flex-1 bg-gray-300/80" />
      </div>
    </header>
  );
}
