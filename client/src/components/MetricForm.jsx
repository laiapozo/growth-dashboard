import { useState } from "react";
import { createMetric } from "../services/metricsService";

function MetricForm() {
  const [name, setName] = useState("");
  const [value, setValue] = useState("");
  const [date, setDate] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    if (!name) return setError("Please select a metric");
    if (!value || parseInt(value) <= 0)
      return setError("Value must be greater than 0");
    if (!date) return setError("Please select a date");

    setError("");

    await createMetric({
      name,
      value: parseInt(value),
      timestamp: date,
      created_by: "Alice Smith",
    });

    setName("");
    setValue("");
    setDate("");
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-xl border border-border-gray p-8 max-w-md"
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-mid-gray">Metric</label>
          <select
            value={name}
            onChange={(ev) => setName(ev.target.value)}
            className="border border-border-gray rounded-lg px-3 py-2 text-sm text-almost-black focus:outline-none"
          >
            <option value="">Select</option>
            <option value="page_visits">Page visits</option>
            <option value="signups">Signups</option>
            <option value="conversions">Conversions</option>
          </select>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-mid-gray">Value</label>
          <input
            type="number"
            value={value}
            onChange={(ev) => setValue(ev.target.value)}
            placeholder="Value of the metric"
            min="1"
            className="border border-border-gray rounded-lg px-3 py-2 text-sm text-almost-black focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-mid-gray">Date</label>
          <input
            type="date"
            value={date}
            onChange={(ev) => setDate(ev.target.value)}
            className="border border-border-gray rounded-lg px-3 py-2 text-sm text-almost-black focus:outline-none"
          />
        </div>
        {error && <p className="text-sm text-brand-red">{error}</p>}
        {success && (
          <p className="text-sm text-green-500">Metric saved successfully ✓</p>
        )}
        <div className="flex gap-3 mt-2">
          <button
            type="button"
            onClick={() => {
              setName("");
              setValue("");
              setDate("");
              setError("");
            }}
            className="flex-1 border border-border-gray rounded-lg py-2 text-sm font-medium text-almost-black hover:bg-light-gray transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="flex-1 bg-brand-red rounded-lg py-2 text-sm font-medium text-white hover:opacity-90 transition-opacity"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
}

export default MetricForm;
