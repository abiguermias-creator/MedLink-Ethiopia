const Doctor = require("../models/doctorModel");

// CREATE DOCTOR
const createDoctor = async (req, res) => {
    try {
        await Doctor.createDoctor(req.body);

        res.json({
            message: "Doctor created successfully"
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

// GET ALL DOCTORS
const getDoctors = async (req, res) => {
    try {
        const result = await Doctor.getDoctors();

        res.json(result.recordset);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

module.exports = {
    createDoctor,
    getDoctors
};