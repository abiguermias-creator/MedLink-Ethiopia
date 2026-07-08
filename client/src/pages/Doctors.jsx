import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import API from "../api/api";
import "./Doctors.css";

function Doctors() {

    const [doctors, setDoctors] = useState([]);

    useEffect(() => {

        const getDoctors = async () => {

            try {

                const response = await API.get("/doctors", {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                });

                setDoctors(response.data);

            } catch (error) {
                console.log(error);
            }

        };

        getDoctors();

    }, []);


    return (
        <div>

            <Navbar />

            <div className="page">

                <h1>
                    Doctors
                </h1>


                <div className="cards">

                    {
                        doctors.map((doctor) => (

                            <div className="card" key={doctor.doctor_id}>

                                <h3>
                                    Doctor ID: {doctor.doctor_id}
                                </h3>

                                <p>
                                    User ID: {doctor.user_id}
                                </p>

                                <p>
                                    Specialization: {doctor.specialization}
                                </p>

                                <p>
                                    Phone: {doctor.phone}
                                </p>

                                <p>
                                    Experience: {doctor.experience_years} years
                                </p>

                            </div>

                        ))
                    }

                </div>

            </div>

        </div>
    );
}

export default Doctors;