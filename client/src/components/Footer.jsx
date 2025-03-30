import { Link } from "react-router";

export default function Footer() {
    return (
        <>
            <footer>
            <p>&copy; PC Configurations 2025. All rights reserved.</p>
                <nav>
                    <ul>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/privacy">Privacy Policy</Link></li>
                    </ul>
                </nav>
            </footer>
        </>
    );
}