import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
// TODO: Change URL once deployed

export const getMetrics = async () => {
  const response = await axios.get(`${API_URL}/metrics`);
  return response.data;
};

export const createMetric = async (metric) => {
  const response = await axios.post(`${API_URL}/metrics`, metric);
  return response.data;
};
