import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import API from "../api/api";
import "./Patients.css";

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

            <div className="page">

                <h1>
                    Patients
                </h1>


                <div className="cards">

                    {
                        patients.map((patient) => (

                            <div className="card" key={patient.patient_id}>

                                <h3>
                                    Patient ID: {patient.patient_id}
                                </h3>

                                <p>
                                    User ID: {patient.user_id}
                                </p>

                                <p>
                                    Gender: {patient.gender}
                                </p>

                                <p>
                                    Phone: {patient.phone}
                                </p>

                            </div>

                        ))
                    }

                </div>

            </div>

        </div>
    );
}

export default Patients;