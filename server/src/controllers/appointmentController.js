const Appointment = require("../models/appointmentModel");

// CREATE APPOINTMENT
const createAppointment = async (req, res) => {
    try {
        await Appointment.createAppointment(req.body);

        res.json({
            message: "Appointment created successfully"
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

// GET ALL APPOINTMENTS
const getAppointments = async (req, res) => {
    try {
        const result = await Appointment.getAppointments();

        res.json(result.recordset);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

module.exports = {
    createAppointment,
    getAppointments
};