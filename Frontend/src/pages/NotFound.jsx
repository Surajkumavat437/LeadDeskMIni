import React from "react";
import { Link } from "react-router-dom";
import { Home, ArrowLeft, ShieldAlert } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#F1F3FE]/40 px-6 py-12">
      <div className="w-full max-w-md text-center">
        {/* Icon Badge */}
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-indigo-50 border border-indigo-100/80 text-indigo-600 shadow-sm shadow-indigo-100">
          <ShieldAlert size={32} />
        </div>

        {/* Error Code & Heading */}
        <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
          Error 404
        </span>
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Page not found
        </h1>
        <p className="mt-2 text-sm text-slate-500 leading-relaxed">
          Sorry, we couldn’t find the page you’re looking for. It might have
          been removed, renamed, or doesn't exist.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => window.history.back()}
            className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 text-xs font-semibold text-slate-700 transition hover:bg-slate-50 hover:border-slate-300 shadow-sm"
          >
            <ArrowLeft size={16} />
            Go back
          </button>

          <Link
            to="/"
            className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-2xl bg-indigo-600 px-5 py-3 text-xs font-semibold text-white transition hover:bg-indigo-700 shadow-md shadow-indigo-200"
          >
            <Home size={16} />
            Back to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
