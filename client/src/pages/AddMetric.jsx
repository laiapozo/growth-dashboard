import MetricForm from "../components/MetricForm";

function AddMetric() {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-2xl font-semibold text-almost-black">Add Metric</h2>
      <MetricForm />
    </div>
  );
}

export default AddMetric;
