import React from "react";

export default function StatusBadge({ status, onChange }) {
  // Define fixed background and text colors for each status type
  const getStatusStyle = (currentStatus) => {
    switch (currentStatus) {
      case "New":
        return "bg-sky-50 text-sky-700 border border-sky-200/60"; // 👈 Distinct color for New
      case "In Progress":
        return "bg-amber-50 text-amber-700 border border-amber-200/60"; // 👈 Distinct color for In Progress
      case "Closed":
        return "bg-emerald-50 text-emerald-700 border border-emerald-200/60"; // 👈 Distinct color for Closed
      default:
        return "bg-slate-100 text-slate-700 border border-slate-200/60";
    }
  };

  return (
    <select
      value={status}
      onChange={(e) => onChange(e.target.value)}
      className={`rounded-xl px-3 py-1.5 text-xs font-semibold shadow-sm transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-100 ${getStatusStyle(
        status,
      )}`}
    >
      <option value="New">New</option>
      <option value="In Progress">In Progress</option>
      <option value="Closed">Closed</option>
    </select>
  );
}
