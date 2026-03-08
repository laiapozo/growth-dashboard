import { useState } from "react";
import useMetrics from "../hooks/useMetrics";
import StatsCards from "../components/StatsCards";
import MetricChart from "../components/MetricChart";

function Dashboard() {
  const { getTotal, getChartData } = useMetrics();

  const [selectedMetric, setSelectedMetric] = useState("page_visits");

  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-2xl font-semibold text-almost-black">
        Growth Dashboard
      </h2>
      <StatsCards getTotal={getTotal} />
      <MetricChart
        data={getChartData(selectedMetric)}
        selectedMetric={selectedMetric}
        onSelectMetric={setSelectedMetric}
      />
    </div>
  );
}

export default Dashboard;
