const express = require("express");
const router = express.Router();

const { protect, adminOnly } = require("../middleware/authMiddleware");
const {
    createDoctor,
    getDoctors
} = require("../controllers/doctorController");

// 🔐 ADMIN ONLY - CREATE DOCTOR
router.post("/", protect, adminOnly, createDoctor);

// 🔐 PROTECTED - GET ALL DOCTORS
router.get("/", protect, getDoctors);

module.exports = router;