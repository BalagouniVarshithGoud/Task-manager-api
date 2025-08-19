const express = require("express");
const app = express();

// Middlewares
app.use(express.json());

// Route files
app.use("/api/auth", require("../routes/authRoutes"));   // ✅ will crash if auth.js is broken
app.use("/api/tasks", require("../routes/taskRoutes"));  // ✅ optional if task.js is ready

app.get("/health", (req, res) => {
  res.send("API is healthy ✅");
});

module.exports = app;


