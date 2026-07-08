import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import API from "../api/api";
import "./Dashboard.css";


function Dashboard() {

    const [patients, setPatients] = useState(0);
    const [doctors, setDoctors] = useState(0);
    const [appointments, setAppointments] = useState(0);


    useEffect(() => {


        const getData = async () => {

            try {


                const config = {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                };


                const patientsResponse = await API.get(
                    "/patients",
                    config
                );


                const doctorsResponse = await API.get(
                    "/doctors",
                    config
                );


                const appointmentsResponse = await API.get(
                    "/appointments",
                    config
                );


                setPatients(
                    patientsResponse.data.length
                );


                setDoctors(
                    doctorsResponse.data.length
                );


                setAppointments(
                    appointmentsResponse.data.length
                );


            } catch (error) {

                console.log(error);

            }

        };


        getData();


    }, []);



    return (

        <div>

            <Navbar />


            <div className="dashboard">


                <h1>
                    MedLink Ethiopia Dashboard
                </h1>


                <h2>
                    Welcome Admin
                </h2>


                <p>
                    Healthcare Management System
                </p>



                <div className="cards">


                    <div className="card">

                        <h3>
                            Patients
                        </h3>

                        <strong>
                            {patients}
                        </strong>

                        <p>
                            Registered patients
                        </p>

                    </div>




                    <div className="card">

                        <h3>
                            Doctors
                        </h3>

                        <strong>
                            {doctors}
                        </strong>

                        <p>
                            Available doctors
                        </p>

                    </div>




                    <div className="card">

                        <h3>
                            Appointments
                        </h3>

                        <strong>
                            {appointments}
                        </strong>

                        <p>
                            Total appointments
                        </p>

                    </div>


                </div>


            </div>


        </div>

    );

}


export default Dashboard;