import React from "react";
import StatusBadge from "../ui/StatusBadge";
import { Trash2 } from "lucide-react";

export default function LeadsTable({ leads, onStatusChange, onDelete }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse min-w-[800px]">
        <thead>
          <tr className="border-b border-slate-100 text-xs font-bold text-slate-800 uppercase tracking-wider">
            <th className="py-4 px-6">Name</th>
            <th className="py-4 px-6">Email</th>
            <th className="py-4 px-6">Phone</th>
            <th className="py-4 px-6">Budget Range</th>
            <th className="py-4 px-6">Message</th>
            <th className="py-4 px-6">Status</th>
            <th className="py-4 px-6">Submitted At</th>
            <th className="py-4 px-6 text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 text-sm">
          {leads.length === 0 ? (
            <tr>
              <td
                colSpan="8"
                className="py-8 text-center text-slate-400 font-medium"
                style={{ verticalAlign: "middle" }}
              >
                No leads found matching your search criteria.
              </td>
            </tr>
          ) : (
            leads.map((lead) => {
              const leadId = lead._id || lead.id;
              return (
                <tr
                  key={leadId}
                  className="hover:bg-slate-50/50 transition-colors"
                >
                  <td className="py-4 px-6" style={{ verticalAlign: "middle" }}>
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
                  <td
                    className="py-4 px-6 text-slate-600 font-medium"
                    style={{ verticalAlign: "middle" }}
                  >
                    {lead.email}
                  </td>
                  <td
                    className="py-4 px-6 text-slate-600 font-medium whitespace-nowrap"
                    style={{ verticalAlign: "middle" }}
                  >
                    {lead.phone || "N/A"}
                  </td>
                  <td className="py-4 px-6" style={{ verticalAlign: "middle" }}>
                    <span
                      className={`inline-flex items-center rounded-lg px-2.5 py-1 text-xs font-semibold ${
                        lead.budgetColor || "bg-indigo-50 text-indigo-600"
                      }`}
                    >
                      {lead.budget}
                    </span>
                  </td>
                  <td
                    className="py-4 px-6 text-slate-600 max-w-[220px]"
                    style={{ verticalAlign: "middle" }}
                  >
                    <p
                      className="truncate text-xs leading-relaxed"
                      title={lead.message}
                    >
                      {lead.message || "No message provided"}
                    </p>
                  </td>
                  <td className="py-4 px-6" style={{ verticalAlign: "middle" }}>
                    <StatusBadge
                      status={lead.status}
                      onChange={(newStatus) =>
                        onStatusChange(leadId, newStatus)
                      }
                    />
                  </td>
                  <td
                    className="py-4 px-6 text-xs text-slate-500 font-medium whitespace-nowrap"
                    style={{ verticalAlign: "middle" }}
                  >
                    {lead.submittedAt ||
                      new Date(lead.createdAt).toLocaleDateString()}
                  </td>
                  <td
                    className="py-4 px-6 text-right"
                    style={{ verticalAlign: "middle" }}
                  >
                    <button
                      onClick={() => onDelete(leadId)}
                      className="p-2 text-slate-400 hover:text-red-600 transition-colors rounded-lg hover:bg-red-50"
                      title="Delete Lead"
                    >
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
}
