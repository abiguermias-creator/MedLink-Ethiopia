import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import API from "../api/api";

function Appointments() {

    const [appointments, setAppointments] = useState([]);

    useEffect(() => {

        const getAppointments = async () => {

            try {

                const response = await API.get("/appointments", {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                });

                setAppointments(response.data);

            } catch (error) {
                console.log(error);
            }

        };

        getAppointments();

    }, []);


    return (
        <div>

            <Navbar />

            <h1>Appointments</h1>

            {
                appointments.map((appointment) => (
                    <div key={appointment.appointment_id}>

                        <p>
                            Patient ID: {appointment.patient_id}
                        </p>

                        <p>
                            Doctor ID: {appointment.doctor_id}
                        </p>

                        <p>
                            Date: {appointment.appointment_date}
                        </p>

                        <p>
                            Status: {appointment.status}
                        </p>

                        <p>
                            Notes: {appointment.notes}
                        </p>

                        <hr />

                    </div>
                ))
            }

        </div>
    );
}

export default Appointments;