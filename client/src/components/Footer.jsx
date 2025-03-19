import { Link } from "react-router";

export default function Footer() {
    return (
        <>
            <footer>
                <nav>
                    <ul>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/privacy">Privacy Policy</Link></li>
                    </ul>
                </nav>
                <p>&copy; 2025 Your Website. All rights reserved.</p>
            </footer>
        </>
    );
}