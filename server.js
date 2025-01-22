const express = require("express");
const serverless = require("serverless-http");
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "../build")));

// Your routes here
app.get("/api/test", (req, res) => {
  res.status(200).json({ message: "Backend is working!" });
});

// Catch-all handler to serve frontend
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

module.exports.handler = serverless(app);
