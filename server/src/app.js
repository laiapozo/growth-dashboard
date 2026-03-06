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
