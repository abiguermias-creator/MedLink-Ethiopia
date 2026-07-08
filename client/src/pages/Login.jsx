import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/api";
import "./Login.css";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();


    const handleLogin = async (e) => {

        e.preventDefault();

        try {

            const response = await API.post("/auth/login", {
                email,
                password
            });


            localStorage.setItem(
                "token",
                response.data.token
            );


            navigate("/dashboard");


        } catch (error) {

            console.log(error);

            alert("Invalid email or password");

        }

    };


    return (

        <div className="login-container">


            <div className="login-card">


                <h1>
                    MedLink Ethiopia
                </h1>


                <h2>
                    Healthcare Management System
                </h2>


                <p>
                    Login to access your account
                </p>



                <form onSubmit={handleLogin}>


                    <input

                        type="email"

                        placeholder="Email"

                        value={email}

                        onChange={(e) =>
                            setEmail(e.target.value)
                        }

                    />



                    <input

                        type="password"

                        placeholder="Password"

                        value={password}

                        onChange={(e) =>
                            setPassword(e.target.value)
                        }

                    />



                    <button type="submit">

                        Login

                    </button>


                </form>


            </div>


        </div>

    );

}


export default Login;