const express = require("express");
const router = express.Router();

const { poolPromise } = require("../config/db");

const { protect } = require("../middleware/authMiddleware");



router.get("/stats", protect, async (req, res) => {

    try {

        const pool = await poolPromise;


        const patients = await pool.request()
            .query(`
                SELECT COUNT(*) AS count
                FROM Patients
            `);


        const doctors = await pool.request()
            .query(`
                SELECT COUNT(*) AS count
                FROM Doctors
            `);


        const appointments = await pool.request()
            .query(`
                SELECT COUNT(*) AS count
                FROM Appointments
            `);


        const pending = await pool.request()
            .query(`
                SELECT COUNT(*) AS count
                FROM Appointments
                WHERE status = 'Pending'
            `);



        res.json({

            patients: patients.recordset[0].count,

            doctors: doctors.recordset[0].count,

            appointments: appointments.recordset[0].count,

            pending: pending.recordset[0].count

        });



    } catch (error) {


        res.status(500).json({

            message: "Dashboard statistics error",

            error: error.message

        });


    }

});



module.exports = router;