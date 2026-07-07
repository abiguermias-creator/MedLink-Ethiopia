const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
require("dotenv").config({ path: require("path").resolve(__dirname, "../.env") });

const { poolPromise } = require("./config/db");

// Routes
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");
const patientRoutes = require("./routes/patientRoutes");
const doctorRoutes = require("./routes/doctorRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");

// Middleware
const { protect } = require("./middleware/authMiddleware");

const app = express();

// Global Middlewares
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use("/api/patients", patientRoutes);
app.use("/api/doctors", doctorRoutes);
app.use("/api/appointments", appointmentRoutes);


// Test Database Connection
app.get("/api/test-db", async (req, res) => {
    try {
        const pool = await poolPromise;

        const result = await pool.request().query("SELECT 1 AS status");

        res.json({
            message: "Database connected successfully 🚀",
            data: result.recordset
        });

    } catch (error) {
        res.status(500).json({
            message: "Database connection failed",
            error: error.message
        });
    }
});


// Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);


// Protected Route
app.get("/api/protected", protect, (req, res) => {
    res.json({
        message: "Access granted! 🔐",
        user: req.user
    });
});


// Home Route (Optional)
app.get("/", (req, res) => {
    res.send("🚀 MedLink Ethiopia API is running...");
});


// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});