import { useState, useEffect } from "react";
import { getMetrics } from "../services/metricsService";
import StatsCards from "../components/StatsCards";
import MetricChart from "../components/MetricChart";

function Dashboard() {
  const [metrics, setMetrics] = useState([]);
  const [selectedMetric, setSelectedMetric] = useState("page_visits");

  useEffect(() => {
    getMetrics().then((data) => setMetrics(data));
  }, []);

  const filteredMetrics = metrics.filter((m) => m.name === selectedMetric);

  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-2xl font-semibold text-almost-black">
        Growth Dashboard
      </h2>
      <StatsCards metrics={metrics} />
      <MetricChart
        metrics={filteredMetrics}
        selectedMetric={selectedMetric}
        onSelectMetric={setSelectedMetric}
      />
    </div>
  );
}

export default Dashboard;
