import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function MetricChart({ metrics, selectedMetric, onSelectMetric }) {
  const options = ["page_visits", "signups", "conversions"];

  const data = metrics.map((metric) => ({
    date: new Date(metric.timestamp).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
    }),
    value: metric.value,
  }));

  const labels = {
    page_visits: "Page visits",
    signups: "Signups",
    conversions: "Conversions",
  };

  return (
    <div className="bg-white rounded-xl border border-border-gray p-6">
      <div className="flex items-center justify-between mb-6">
        <select
          value={selectedMetric}
          onChange={(ev) => onSelectMetric(ev.target.value)}
          className="border border-border-gray rounded-lg px-3 py-2 text-sm text-almost-black font-medium focus:outline-none"
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {labels[option]}
            </option>
          ))}
        </select>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
          <XAxis dataKey="date" tick={{ fontSize: 12, fill: "#6B7280" }} />
          <YAxis tick={{ fontSize: 12, fill: "#6B7280" }} />
          <Tooltip formatter={(value) => [value]} />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#FF4757"
            strokeWidth={2}
            dot={{ fill: "#FF4757", r: 4 }}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default MetricChart;
