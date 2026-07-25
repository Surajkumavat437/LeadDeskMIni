import React, { useState } from "react";
import {
  User,
  Mail,
  Wallet,
  Edit3,
  Send,
  Lock,
  Loader2,
  CheckCircle2,
} from "lucide-react";
import api from "../../api/axios";

export default function LeadCaptureForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await api.post("/leads", formData);
      setSubmitted(true);
      setFormData({ name: "", email: "", budget: "", message: "" });
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Failed to submit lead. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-lg rounded-3xl border border-white/80 bg-white/95 p-8 shadow-2xl shadow-indigo-100/60 backdrop-blur-xl">
      <div className="mb-6">
        <h3 className="text-2xl font-bold tracking-tight text-slate-900">
          Tell Us About Your Project
        </h3>
        <p className="mt-1 text-xs text-slate-500">
          Fill out the form below and we'll get back to you soon.
        </p>
      </div>

      {submitted ? (
        <div className="py-12 text-center space-y-3">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 shadow-md shadow-emerald-100">
            <CheckCircle2 size={36} />
          </div>
          <h4 className="text-xl font-bold text-slate-800">
            Inquiry Received!
          </h4>
          <p className="text-xs text-slate-500 max-w-xs mx-auto">
            Thank you! Your details have been submitted. Our team will contact
            you within 24 hours.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-4 rounded-xl bg-indigo-600 px-5 py-2.5 text-xs font-bold text-white shadow-md transition hover:bg-indigo-700"
          >
            Submit Another Lead
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="rounded-xl bg-red-50 border border-red-200 p-3 text-center text-xs font-semibold text-red-600">
              {error}
            </div>
          )}

          {/* Full Name */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Full Name
            </label>
            <div className="relative">
              <User
                size={16}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="text"
                required
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 py-3 pl-10 pr-4 text-xs font-medium text-slate-800 placeholder-slate-400 transition focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-100"
              />
            </div>
          </div>

          {/* Email Address */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Email Address
            </label>
            <div className="relative">
              <Mail
                size={16}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="email"
                required
                placeholder="Enter your email address"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 py-3 pl-10 pr-4 text-xs font-medium text-slate-800 placeholder-slate-400 transition focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-100"
              />
            </div>
          </div>

          {/* Budget Range */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Budget Range
            </label>
            <div className="relative">
              <Wallet
                size={16}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
              />
              <select
                required
                value={formData.budget}
                onChange={(e) =>
                  setFormData({ ...formData, budget: e.target.value })
                }
                className="w-full appearance-none rounded-2xl border border-slate-200 bg-slate-50/50 py-3 pl-10 pr-4 text-xs font-medium text-slate-700 transition focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-100 cursor-pointer"
              >
                <option value="" disabled>
                  Select your budget range
                </option>
                <option value="30000">₹10k - ₹50k</option>
                <option value="75000">₹50k - ₹1L</option>
                <option value="150000">₹1L+</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Message
            </label>
            <div className="relative">
              <Edit3
                size={16}
                className="absolute left-3.5 top-3.5 text-slate-400"
              />
              <textarea
                required
                rows={3}
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 py-3 pl-10 pr-4 text-xs font-medium text-slate-800 placeholder-slate-400 transition focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-100"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="mt-2 flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-indigo-600 text-xs font-bold text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-700 active:scale-[0.99] disabled:opacity-70"
          >
            {loading ? (
              <Loader2 size={18} className="animate-spin" />
            ) : (
              <>
                <Send size={15} /> Submit Lead
              </>
            )}
          </button>

          <p className="flex items-center justify-center gap-1.5 pt-2 text-[11px] font-medium text-slate-400">
            <Lock size={12} /> Your information is safe with us.
          </p>
        </form>
      )}
    </div>
  );
}
