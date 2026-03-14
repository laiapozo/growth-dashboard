const express = require("express");
const cors = require("cors");
const pool = require("./config/db");

const app = express();
app.use(express.json());
app.use(cors());

const VALID_METRICS = ["page_visits", "signups", "conversions"];

// GET all metrics
app.get("/api/metrics", async (req, res) => {
  try {
    const [metrics] = await pool.query(
      "SELECT * FROM metrics ORDER BY timestamp ASC",
    );
    res.json(metrics);
  } catch (error) {
    res.status(500).json({ error: "Error fetching metrics" });
  }
});

// POST new metric
app.post("/api/metrics", async (req, res) => {
  try {
    const { name, value, timestamp, created_by } = req.body;

    // Validate fields
    if (!name || !value || !timestamp) {
      return res.status(400).json({ error: "All fields are required" });
    }
    if (!VALID_METRICS.includes(name)) {
      return res.status(400).json({ error: "Invalid metric name" });
    }
    if (value <= 0 || !Number.isInteger(Number(value))) {
      return res
        .status(400)
        .json({ error: "Value must be a positive integer" });
    }
    const today = new Date().toISOString().split("T")[0];
    if (timestamp > today) {
      return res.status(400).json({ error: "Date can not be in the future" });
    }

    // Check for duplicates
    const [existing] = await pool.query(
      "SELECT id FROM metrics WHERE name = ? AND DATE(timestamp) = DATE(?)",
      [name, timestamp],
    );
    if (existing.length > 0) {
      return res
        .status(409)
        .json({
          error: "A metric with this name already exists for this date",
        });
    }

    // Insert new metric
    await pool.query(
      "INSERT INTO metrics (name, value, timestamp, created_by) VALUES (?, ?, ?, ?)",
      [name, value, timestamp, created_by],
    );
    res.status(201).json({ message: "Metric created successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error creating metric" });
  }
});

module.exports = app;
