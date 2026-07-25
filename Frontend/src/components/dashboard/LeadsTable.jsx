import React from "react";
import StatusBadge from "../ui/StatusBadge";

export default function LeadsTable({ leads, onStatusChange }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse min-w-[700px]">
        <thead>
          <tr className="border-b border-slate-100 text-xs font-bold text-slate-800 uppercase tracking-wider">
            <th className="py-4 px-6">Name</th>
            <th className="py-4 px-6">Email</th>
            <th className="py-4 px-6">Budget Range</th>
            <th className="py-4 px-6">Message</th>
            <th className="py-4 px-6">Status</th>
            <th className="py-4 px-6">Submitted At</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 text-sm">
          {leads.length === 0 ? (
            <tr>
              <td
                colSpan="6"
                className="py-8 text-center text-slate-400 font-medium"
              >
                No leads found matching your search criteria.
              </td>
            </tr>
          ) : (
            leads.map((lead) => (
              <tr
                key={lead.id}
                className="hover:bg-slate-50/50 transition-colors"
              >
                <td className="py-4 px-6">
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                        lead.avatarBg || "bg-indigo-100 text-indigo-600"
                      }`}
                    >
                      {lead.avatarInitial || lead.name.charAt(0)}
                    </div>
                    <span className="font-semibold text-slate-900">
                      {lead.name}
                    </span>
                  </div>
                </td>
                <td className="py-4 px-6 text-slate-600 font-medium">
                  {lead.email}
                </td>
                <td className="py-4 px-6">
                  <span
                    className={`inline-flex items-center rounded-lg px-2.5 py-1 text-xs font-semibold ${
                      lead.budgetColor || "bg-indigo-50 text-indigo-600"
                    }`}
                  >
                    {lead.budget}
                  </span>
                </td>
                <td className="py-4 px-6 text-slate-600 max-w-[200px] truncate">
                  {lead.message}
                </td>
                <td className="py-4 px-6">
                  <StatusBadge
                    status={lead.status}
                    onChange={(newStatus) => onStatusChange(lead.id, newStatus)}
                  />
                </td>
                <td className="py-4 px-6 text-xs text-slate-500 font-medium whitespace-pre-line">
                  {lead.submittedAt}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
