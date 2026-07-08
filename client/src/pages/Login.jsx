import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/api";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
    e.preventDefault();

    console.log("Login button clicked");

    try {
        const response = await API.post("/auth/login", {
            email,
            password
        });

        localStorage.setItem("token", response.data.token);

alert("Login Successful!");

navigate("/dashboard");

    } catch (error) {
    console.log("Full Error:", error);
    console.log("Response:", error.response);
    console.log("Data:", error.response?.data);
    console.log("Message:", error.message);
}
};

    return (
        <div>
            <h1>MedLink Ethiopia</h1>
            <h2>Login</h2>

            <form onSubmit={handleLogin}>

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <br />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <br />

                <button type="submit" onClick={() => console.log("button pressed")}>
    Login
</button>

            </form>
        </div>
    );
}

export default Login;