const express = require("express");
const router = express.Router();

const { protect } = require("../middleware/authMiddleware");
const {
    createAppointment,
    getAppointments
} = require("../controllers/appointmentController");

// 🔐 CREATE APPOINTMENT (logged-in users only)
router.post("/", protect, createAppointment);

// 🔐 GET ALL APPOINTMENTS
router.get("/", protect, getAppointments);

module.exports = router;