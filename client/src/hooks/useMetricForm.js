import { useState } from "react";
import { createMetric } from "../services/metricsService";

function useMetricForm() {
  const [name, setName] = useState("");
  const [value, setValue] = useState("");
  const [date, setDate] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSave = async (ev) => {
    ev.preventDefault();

    if (!name) return setError("Please select a metric");
    if (!value || parseInt(value) <= 0)
      return setError("Value must be greater than 0");
    if (!date) return setError("Please select a date");

    setError("");

    const response = await createMetric({
      name,
      value: parseInt(value),
      timestamp: date,
      created_by: "Alice Smith",
    });

    if (response.error) {
      return setError(response.error);
    }

    setName("");
    setValue("");
    setDate("");
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };
  const handleCancel = () => {
    setName("");
    setValue("");
    setDate("");
    setError("");
  };

  return {
    name,
    setName,
    value,
    setValue,
    date,
    setDate,
    error,
    success,
    handleSave,
    handleCancel,
  };
}

export default useMetricForm;
