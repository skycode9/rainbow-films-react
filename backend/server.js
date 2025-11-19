const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");
require("dotenv").config();
const connectDB = require("./db");

const app = express();
const port = process.env.PORT || 8080;

const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:4173",
  "http://localhost:8080",
  "https://rainbow-films-react.onrender.com",
  process.env.FRONTEND_URL,
].filter(Boolean);

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        console.log("❌ Origin blocked:", origin);
        console.log("📋 Allowed origins:", allowedOrigins);
        callback(new Error("Blocked by CORS: " + origin));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Connect to MongoDB
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Serve static files from public/uploads
app.use("/uploads", express.static(path.join(__dirname, "public/uploads")));

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/films", require("./routes/films"));
app.use("/api/team", require("./routes/team"));
app.use("/api/clients", require("./routes/clients"));
app.use("/api/contacts", require("./routes/contacts"));
app.use("/api/subscribers", require("./routes/subscribers"));
app.use("/api/settings", require("./routes/settings"));
app.use("/api/upload", require("./routes/upload"));

// Serve static files from frontend build (PRODUCTION)
app.use(express.static(path.join(__dirname, "../frontend/dist")));

// Catch-all route for frontend (SPA routing) - must be after API routes
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist", "index.html"));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});

app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
