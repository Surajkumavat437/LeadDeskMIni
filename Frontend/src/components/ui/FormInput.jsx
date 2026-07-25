import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function FormInput({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  icon: Icon,
  required = true,
  disabled = false,
}) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";
  const inputType = isPassword ? (showPassword ? "text" : "password") : type;

  return (
    <div>
      <label className="mb-1 block text-xs font-semibold text-slate-700">
        {label}
      </label>
      <div className="flex h-11 items-center rounded-xl border border-gray-200/90 bg-white/90 px-3.5 transition focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-100">
        {Icon && <Icon size={18} className="text-gray-400 shrink-0" />}
        <input
          type={inputType}
          required={required}
          disabled={disabled}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="ml-2.5 w-full bg-transparent text-sm text-slate-800 placeholder-gray-400 outline-none disabled:opacity-50"
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="text-gray-400 hover:text-gray-600 focus:outline-none"
            tabIndex={-1}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}
      </div>
    </div>
  );
}
