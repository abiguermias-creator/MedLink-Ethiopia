const { poolPromise } = require("../config/db");

// CREATE PATIENT
const createPatient = async (data) => {
    const pool = await poolPromise;

    return await pool.request()
        .input("user_id", data.user_id)
        .input("date_of_birth", data.date_of_birth)
        .input("gender", data.gender)
        .input("phone", data.phone)
        .input("address", data.address)
        .query(`
            INSERT INTO Patients (user_id, date_of_birth, gender, phone, address)
            VALUES (@user_id, @date_of_birth, @gender, @phone, @address)
        `);
};

// GET ALL PATIENTS
const getPatients = async () => {
    const pool = await poolPromise;
    return await pool.request().query("SELECT * FROM Patients");
};

module.exports = {
    createPatient,
    getPatients
};