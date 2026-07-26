import api from "./axios.js"; //

export const loginAdmin = async (credentials) => {
  const response = await api.post("/auth/login", credentials);
  return response.data;
};

export const logoutAdmin = async () => {
  const response = await api.post("/auth/logout");
  return response.data;
};
