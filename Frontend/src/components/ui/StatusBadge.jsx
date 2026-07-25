import React from "react";
import { ChevronDown } from "lucide-react";

export const getStatusBadgeClass = (status) => {
  switch (status) {
    case "New":
      return "bg-amber-100/70 text-amber-800 border-amber-200/50";
    case "Contacted":
      return "bg-indigo-100/70 text-indigo-600 border-indigo-200/50";
    case "Closed":
      return "bg-emerald-100/70 text-emerald-700 border-emerald-200/50";
    default:
      return "bg-gray-100 text-gray-700 border-gray-200";
  }
};

export default function StatusBadge({ status, onChange }) {
  return (
    <div className="relative inline-block">
      <select
        value={status}
        onChange={(e) => onChange(e.target.value)}
        className={`appearance-none rounded-xl border px-3 py-1 pr-7 text-xs font-bold cursor-pointer transition focus:outline-none ${getStatusBadgeClass(
          status,
        )}`}
      >
        <option value="New">New</option>
        <option value="Contacted">Contacted</option>
        <option value="Closed">Closed</option>
      </select>
      <ChevronDown
        size={14}
        className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-current opacity-70"
      />
    </div>
  );
}
