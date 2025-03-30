import { Link } from "react-router";
import useUserAuth from "../hooks/useUserAuth";

export default function Header() {
    const { email, isAuthenticated } = useUserAuth();

    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/configurations">Catalog</Link></li>
                    {isAuthenticated
                        ? (
                            <>
                                <li><Link to="/configurations/add">Add</Link></li>
                                <li><Link to="/logout">Logout</Link></li>
                                {email.charAt(0).toUpperCase() + email.slice(1, email.indexOf('@'))}
                            </>
                        )
                        : (
                            <>
                                <li><Link to="/login">Login</Link></li>
                                <li><Link to="/register">Register</Link></li>
                            </>
                        )
                    }
                </ul>
            </nav>
        </header>
    );
}