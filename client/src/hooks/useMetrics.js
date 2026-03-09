import { useState, useEffect } from "react";
import { getMetrics } from "../services/metricsService";

function useMetrics() {
  const [metrics, setMetrics] = useState([]);

  useEffect(() => {
    getMetrics()
      .then((data) => setMetrics(data))
      .catch((error) => console.error("Error fetching metrics:", error));
  }, []);

  const getTotal = (name) => {
    const filtered = metrics.filter((metric) => metric.name === name);
    let total = 0;
    for (const metric of filtered) {
      total = total + metric.value;
    }
    return total;
  };

  const getChartData = (name) => {
    return metrics
      .filter((metric) => metric.name === name)
      .map((metric) => ({
        date: new Date(metric.timestamp).toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
        }),
        value: metric.value,
      }));
  };

  return { getTotal, getChartData };
}

export default useMetrics;
