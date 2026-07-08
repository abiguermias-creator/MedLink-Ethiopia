import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import API from "../api/api";

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

            <h1>Doctors</h1>

            {
                doctors.map((doctor) => (
                    <div key={doctor.doctor_id}>

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

                        <hr />

                    </div>
                ))
            }

        </div>
    );
}

export default Doctors;