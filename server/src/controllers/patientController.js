const Patient = require("../models/patientModel");

// CREATE PATIENT
const createPatient = async (req, res) => {
    try {
        await Patient.createPatient(req.body);
        res.json({ message: "Patient created successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// GET ALL PATIENTS
const getPatients = async (req, res) => {
    try {
        const result = await Patient.getPatients();
        res.json(result.recordset);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createPatient,
    getPatients
};