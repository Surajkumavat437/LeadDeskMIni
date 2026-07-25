import React, { useState } from "react";
import Sidebar from "../components/dashboard/Sidebar";
import Header from "../components/dashboard/Header";
import SearchFilter from "../components/dashboard/SearchFilter";
import LeadsTable from "../components/dashboard/LeadsTable";
import Pagination from "../components/dashboard/Pagination";
import { useLeads } from "../hooks/useLeads";
import { ExternalLink, Loader2, RefreshCw } from "lucide-react";

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const {
    loading,
    error,
    searchTerm,
    statusFilter,
    currentPage,
    totalPages,
    totalCount,
    paginatedLeads,
    setCurrentPage,
    handleSearchChange,
    handleFilterChange,
    handleStatusChange,
    refetchLeads,
    handleDeleteLead,
  } = useLeads();

  return (
    <div className="relative flex h-screen w-screen overflow-hidden bg-[#F7F8FE] text-slate-800 font-sans select-none">
      <div className="pointer-events-none absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full bg-[#7B7DFF]/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-36 -bottom-36 h-[550px] w-[550px] rounded-full bg-[#7B7DFF]/15 blur-3xl" />

      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="relative z-10 flex flex-1 flex-col overflow-y-auto">
        <Header onMenuClick={() => setSidebarOpen(true)} />

        <main className="flex-1 p-6 lg:p-10 space-y-6 max-w-7xl">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold tracking-tight text-slate-900">
                All Leads
              </h1>
              <p className="mt-1 text-sm text-slate-500">
                View and manage live lead submissions.
              </p>
            </div>
            <button
              onClick={refetchLeads}
              disabled={loading}
              className="flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm border border-slate-200 hover:bg-slate-50 transition disabled:opacity-50"
            >
              <RefreshCw
                size={14}
                className={loading ? "animate-spin text-indigo-600" : ""}
              />
              Refresh
            </button>
          </div>

          <SearchFilter
            searchTerm={searchTerm}
            statusFilter={statusFilter}
            onSearchChange={handleSearchChange}
            onFilterChange={handleFilterChange}
          />

          <div className="overflow-hidden rounded-3xl border border-white/80 bg-white/90 shadow-xl shadow-indigo-100/40 backdrop-blur-xl">
            {loading ? (
              <div className="flex h-64 items-center justify-center gap-3 text-slate-500 text-sm font-medium">
                <Loader2 size={22} className="animate-spin text-indigo-600" />
                Fetching live leads from database...
              </div>
            ) : error ? (
              <div className="flex h-64 flex-col items-center justify-center gap-2 text-red-500 text-sm font-medium">
                <p>{error}</p>
                <button
                  onClick={refetchLeads}
                  className="mt-2 text-xs font-semibold text-indigo-600 underline hover:text-indigo-800"
                >
                  Try Again
                </button>
              </div>
            ) : (
              <>
                <LeadsTable
                  leads={paginatedLeads}
                  onStatusChange={handleStatusChange}
                  onDelete={handleDeleteLead}
                />
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  totalCount={totalCount}
                  onPageChange={setCurrentPage}
                />
              </>
            )}
          </div>

          <footer className="pt-4 text-center text-xs text-slate-500">
            <p>
              Built for{" "}
              <span className="font-semibold text-indigo-600">
                Digital Heroes
              </span>{" "}
              Training Task
            </p>
            <a
              href="https://digitalheroesco.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex items-center gap-1 font-semibold text-indigo-600 hover:underline"
            >
              digitalheroesco.com
              <ExternalLink size={12} />
            </a>
          </footer>
        </main>
      </div>
    </div>
  );
}
