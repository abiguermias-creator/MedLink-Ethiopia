import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import API from "../api/api";
import "./Dashboard.css";


function Dashboard() {


    const [stats, setStats] = useState({

        patients: 0,
        doctors: 0,
        appointments: 0,
        pending: 0

    });


    const [loading, setLoading] = useState(true);



    useEffect(() => {


        const getStats = async () => {


            try {


                const response = await API.get("/dashboard/stats", {

                    headers: {

                        Authorization: `Bearer ${localStorage.getItem("token")}`

                    }

                });



                setStats(response.data);



            } catch (error) {


                console.log(error);


            } finally {


                setLoading(false);


            }


        };


        getStats();


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



                {
                    loading ? (

                        <h3>
                            Loading dashboard...
                        </h3>


                    ) : (


                        <div className="dashboard-cards">


                            <div className="dashboard-card patients-card">

                                <h3>
                                    Patients
                                </h3>

                                <h1>
                                    {stats.patients}
                                </h1>

                            </div>



                            <div className="dashboard-card doctors-card">

                                <h3>
                                    Doctors
                                </h3>

                                <h1>
                                    {stats.doctors}
                                </h1>

                            </div>



                            <div className="dashboard-card appointments-card">

                                <h3>
                                    Appointments
                                </h3>

                                <h1>
                                    {stats.appointments}
                                </h1>

                            </div>



                            <div className="dashboard-card pending-card">

                                <h3>
                                    Pending
                                </h3>

                                <h1>
                                    {stats.pending}
                                </h1>

                            </div>


                        </div>

                    )
                }



            </div>


        </div>

    );

}


export default Dashboard;