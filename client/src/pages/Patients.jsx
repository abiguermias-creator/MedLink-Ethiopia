import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import API from "../api/api";

function Patients() {

    const [patients, setPatients] = useState([]);

    useEffect(() => {

        const getPatients = async () => {

            try {

                const response = await API.get("/patients", {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                });

                setPatients(response.data);

            } catch (error) {
                console.log(error);
            }

        };

        getPatients();

    }, []);


    return (
        <div>

            <Navbar />

            <h1>Patients</h1>

            {
                patients.map((patient) => (
                    <div key={patient.patient_id}>

                        <p>
                            Name/User ID: {patient.user_id}
                        </p>

                        <p>
                            Gender: {patient.gender}
                        </p>

                        <p>
                            Phone: {patient.phone}
                        </p>

                        <hr />

                    </div>
                ))
            }

        </div>
    );
}

export default Patients;