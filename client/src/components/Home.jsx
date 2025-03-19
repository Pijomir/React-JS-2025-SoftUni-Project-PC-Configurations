import { Link } from "react-router";

export default function Home() {
    return (
        <>
            <div className="home">
                <h1>Share Your Computer Configurations</h1>
                <p>Browse and upload your custom PC configurations to share with others.</p>

                <div className="configurations-list">
                    <h2>Available Configurations</h2>
                    <ul>
                        <li>
                            <Link to="/details/1">Configuration 1</Link>
                        </li>
                        <li>
                            <Link to="/details/2">Configuration 2</Link>
                        </li>
                        <li>
                            <Link to="/details/3">Configuration 3</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}