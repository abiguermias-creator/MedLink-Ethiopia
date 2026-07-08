import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {

    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
        navigate("/");
    };

    return (
        <nav className="navbar">

            <h2>
                MedLink Ethiopia
            </h2>

            <div className="nav-links">

                <Link to="/dashboard">
                    Dashboard
                </Link>

                <Link to="/patients">
                    Patients
                </Link>

                <Link to="/doctors">
                    Doctors
                </Link>

                <Link to="/appointments">
                    Appointments
                </Link>

                <button onClick={logout}>
                    Logout
                </button>

            </div>

        </nav>
    );
}

export default Navbar;