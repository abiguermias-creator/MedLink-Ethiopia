const express = require("express");
const router = express.Router();

const { protect } = require("../middleware/authMiddleware");
const {
    createPatient,
    getPatients
} = require("../controllers/patientController");

// CREATE PATIENT (protected)
router.post("/", protect, createPatient);

// GET ALL PATIENTS (protected)
router.get("/", protect, getPatients);

module.exports = router;