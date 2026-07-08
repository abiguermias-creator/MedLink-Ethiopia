import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import API from "../api/api";
import "./Appointments.css";

function Appointments() {

    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);


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

            } finally {

                setLoading(false);

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


                {
                    loading ? (

                        <h3>
                            Loading appointments...
                        </h3>

                    ) : (


                        <div className="cards">


                            {
                                appointments.length === 0 ? (

                                    <h3>
                                        No appointments found
                                    </h3>

                                ) : (

                                    appointments.map((appointment) => (

                                        <div 
                                            className="card"
                                            key={appointment.appointment_id}
                                        >

                                            <h3>
                                                Appointment ID: {appointment.appointment_id}
                                            </h3>


                                            <p>
                                                Patient: {appointment.patient_name}
                                            </p>


                                            <p>
                                                Doctor: {appointment.doctor_name}
                                            </p>


                                            <p>
                                                Specialization: {appointment.specialization}
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

                                )
                            }


                        </div>

                    )
                }


            </div>


        </div>

    );

}


export default Appointments;