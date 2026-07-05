const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
require("dotenv").config();

const { poolPromise } = require("./config/db");

// Routes
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));


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


app.use("/api/auth", authRoutes);


app.use("/api/users", userRoutes);


app.get("/api/protected", (req, res) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({
            message: "No token provided"
        });
    }

    const token = authHeader.split(" ")[1];

    res.json({
        message: "Token received successfully 🔐",
        yourToken: token
    });
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});