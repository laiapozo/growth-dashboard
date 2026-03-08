const express = require("express");
const cors = require("cors");
const pool = require("./config/db");

const app = express();
app.use(express.json());
app.use(cors());

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

    // Check if already exists
    const [existing] = await pool.query(
      "SELECT id FROM metrics WHERE name = ? AND DATE(timestamp) = DATE(?)",
      [name, timestamp],
    );

    if (existing.length > 0) {
      return res.status(409).json({
        error: "A metric with this name already exists for this date",
      });
    }

    // If not, insert new metric
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
