import { Link } from "react-router";

export default function Header() {
    return (
        <>
            <header>
    <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/configurations">Catalog</Link></li>
            <li><Link to="/configurations/add">Add</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/logout">Logout</Link></li>
        </ul>
    </nav>
</header>
        </>
    );
}