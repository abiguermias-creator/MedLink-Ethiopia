const { poolPromise } = require("../config/db");

// CREATE DOCTOR
const createDoctor = async (data) => {
    const pool = await poolPromise;

    return await pool.request()
        .input("user_id", data.user_id)
        .input("specialization", data.specialization)
        .input("phone", data.phone)
        .input("experience_years", data.experience_years)
        .query(`
            INSERT INTO Doctors (user_id, specialization, phone, experience_years)
            VALUES (@user_id, @specialization, @phone, @experience_years)
        `);
};

// GET ALL DOCTORS
const getDoctors = async () => {
    const pool = await poolPromise;

    return await pool.request()
        .query("SELECT * FROM Doctors");
};

module.exports = {
    createDoctor,
    getDoctors
};