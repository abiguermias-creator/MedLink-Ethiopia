const { poolPromise } = require("../config/db");

// CREATE APPOINTMENT
const createAppointment = async (data) => {
    const pool = await poolPromise;

    return await pool.request()
        .input("patient_id", data.patient_id)
        .input("doctor_id", data.doctor_id)
        .input("appointment_date", data.appointment_date)
        .input("status", data.status || "pending")
        .query(`
            INSERT INTO Appointments (patient_id, doctor_id, appointment_date, status)
            VALUES (@patient_id, @doctor_id, @appointment_date, @status)
        `);
};

// GET ALL APPOINTMENTS
const getAppointments = async () => {
    const pool = await poolPromise;

    return await pool.request()
        .query(`
            SELECT * FROM Appointments
        `);
};

module.exports = {
    createAppointment,
    getAppointments
};