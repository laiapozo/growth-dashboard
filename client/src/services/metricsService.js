import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const getMetrics = async () => {
  const response = await axios.get(`${API_URL}/metrics`);
  return response.data;
};

export const createMetric = async (metric) => {
  try {
    const response = await axios.post(`${API_URL}/metrics`, metric);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
