import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

// Add JWT automatically to every request
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// Handle invalid or expired JWT
api.interceptors.response.use(
  (response) => response,

  (error) => {
    if (error.response && error.response.status === 401) {
      // Clear user session
      localStorage.removeItem("token");
      localStorage.removeItem("user");

      // Show message
      alert("Session expired. Please login again.");

      // Redirect to login page
      window.location.href = `${process.env.REACT_APP_FRONTEND_URL}/login`;
    }

    return Promise.reject(error);
  }
);

export default api;