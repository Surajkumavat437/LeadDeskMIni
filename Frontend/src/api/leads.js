import api from "./axios";

export const getLeads = async (params) => {
  // Example API call: GET /api/leads?search=rahul&status=New&page=1
  const response = await api.get("/leads", { params });
  return response.data;
};

export const updateLeadStatus = async (id, status) => {
  const response = await api.patch(`/leads/${id}/status`, { status });
  return response.data;
};
