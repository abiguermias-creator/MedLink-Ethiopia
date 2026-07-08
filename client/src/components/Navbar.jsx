import { Link, useNavigate } from "react-router-dom";

function Navbar() {

    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
        navigate("/");
    };

    return (
        <nav>

            <h2>MedLink Ethiopia</h2>

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

        </nav>
    );
}

export default Navbar;