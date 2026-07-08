import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import API from "../api/api";
import "./Appointments.css";

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

            <div className="page">

                <h1>
                    Appointments
                </h1>


                <div className="cards">

                    {
                        appointments.map((appointment) => (

                            <div 
                                className="card"
                                key={appointment.appointment_id}
                            >

                                <h3>
                                    Appointment ID: {appointment.appointment_id}
                                </h3>


                                <p>
                                    Patient ID: {appointment.patient_id}
                                </p>


                                <p>
                                    Doctor ID: {appointment.doctor_id}
                                </p>


                                <p>
                                    Date: {appointment.appointment_date}
                                </p>


                                <span 
                                    className={
                                        appointment.status === "Approved"
                                        ? "status approved"
                                        :
                                        appointment.status === "Cancelled"
                                        ? "status cancelled"
                                        :
                                        "status pending"
                                    }
                                >

                                    {appointment.status}

                                </span>


                                <p>
                                    Notes: {appointment.notes || "No notes"}
                                </p>


                            </div>

                        ))
                    }


                </div>

            </div>

        </div>
    );
}

export default Appointments;