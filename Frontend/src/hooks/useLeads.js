import { useState, useEffect, useCallback } from "react";
import api from "../api/axios";

export function useLeads() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const formatBudget = (budget) => {
    if (typeof budget === "number") {
      if (budget <= 50000) return "₹10k - ₹50k";
      if (budget <= 100000) return "₹50k - ₹1L";
      return "₹1L+";
    }
    return budget || "N/A";
  };

  // Convert Mongoose doc into UI table format
  const formatLead = (lead) => {
    const formattedDate = lead.createdAt
      ? new Date(lead.createdAt).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        })
      : "Just now";

    const formattedTime = lead.createdAt
      ? new Date(lead.createdAt).toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
        })
      : "";

    return {
      id: lead._id || lead.id,
      name: lead.name || "Anonymous",
      email: lead.email || "No email",
      phone: lead.phone || "N/A",
      budget: formatBudget(lead.budget),
      budgetColor: "bg-indigo-50 text-indigo-600",
      message: lead.message || "",
      status: lead.status || "New",
      submittedAt: `${formattedDate}\n${formattedTime}`,
      avatarBg: "bg-indigo-100 text-indigo-600",
      avatarInitial: lead.name ? lead.name.charAt(0).toUpperCase() : "U",
    };
  };

  // GET /api/leads
  const fetchLeads = useCallback(async () => {
    setLoading(true);
    try {
      const response = await api.get("/leads");

      // Target response.data.data array safely
      const rawData = response.data?.data || response.data;
      const leadsArray = Array.isArray(rawData) ? rawData : [];

      setLeads(leadsArray.map(formatLead));
      setError(null);
    } catch (err) {
      console.error("Detailed Axios error fetching leads:", {
        message: err.message,
        response: err.response?.data,
        status: err.response?.status,
      });
      setError(
        err.response?.data?.message || "Failed to load leads from database.",
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchLeads();
  }, [fetchLeads]);

  // PATCH /api/leads/:id/status
  const handleStatusChange = async (id, newStatus) => {
    try {
      // Optimistic state update
      setLeads((prev) =>
        prev.map((lead) =>
          lead.id === id ? { ...lead, status: newStatus } : lead,
        ),
      );

      await api.patch(`/leads/${id}/status`, { status: newStatus });
    } catch (err) {
      console.error("Failed to update lead status:", err);
      // Rollback on failure
      fetchLeads();
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleFilterChange = (status) => {
    setStatusFilter(status);
    setCurrentPage(1);
  };

  // Search & Filter Logic
  const filteredLeads = leads.filter((lead) => {
    const query = searchTerm.toLowerCase();
    const matchesSearch =
      lead.name.toLowerCase().includes(query) ||
      lead.email.toLowerCase().includes(query) ||
      lead.message.toLowerCase().includes(query);

    const matchesStatus =
      statusFilter === "All" || lead.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  // Pagination Logic
  const totalCount = filteredLeads.length;
  const totalPages = Math.ceil(totalCount / itemsPerPage) || 1;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedLeads = filteredLeads.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  return {
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
    refetchLeads: fetchLeads,
  };
}
