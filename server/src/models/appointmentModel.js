const { poolPromise } = require("../config/db");


// CREATE APPOINTMENT
const createAppointment = async (data) => {

    const pool = await poolPromise;

    return await pool.request()

        .input("patient_id", data.patient_id)

        .input("doctor_id", data.doctor_id)

        .input("appointment_date", data.appointment_date)

        .input("status", data.status || "Pending")

        .input("notes", data.notes || null)

        .query(`
            INSERT INTO Appointments
            (
                patient_id,
                doctor_id,
                appointment_date,
                status,
                notes
            )

            VALUES
            (
                @patient_id,
                @doctor_id,
                @appointment_date,
                @status,
                @notes
            )
        `);

};



// GET ALL APPOINTMENTS
const getAppointments = async () => {

    const pool = await poolPromise;


    return await pool.request()

        .query(`

            SELECT

                A.appointment_id,

                A.appointment_date,

                A.status,

                A.notes,


                P.patient_id,

                PU.full_name AS patient_name,


                D.doctor_id,

                DU.full_name AS doctor_name,

                D.specialization


            FROM Appointments A


            INNER JOIN Patients P

            ON A.patient_id = P.patient_id


            INNER JOIN Users PU

            ON P.user_id = PU.id


            INNER JOIN Doctors D

            ON A.doctor_id = D.doctor_id


            INNER JOIN Users DU

            ON D.user_id = DU.id


        `);

};


module.exports = {

    createAppointment,

    getAppointments

};