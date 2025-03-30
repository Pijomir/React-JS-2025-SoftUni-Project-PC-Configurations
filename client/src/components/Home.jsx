import { Link } from "react-router";
import useUserAuth from "../hooks/useUserAuth";
import { useLastConfigurations, useOwnerConfigurations } from "../api/PCConfigurationsApi";

export default function Home() {
    const { lastConfigurations } = useLastConfigurations();
    const { userId, isAuthenticated } = useUserAuth();
    const { myConfigurations } = useOwnerConfigurations(userId);


    return (
        <>
            <div className="home">
                <h1>Share Your Computer Configurations</h1>
                <p>Browse and upload your custom PC configurations to share with others.</p>

                <section className="home-content">
                    <main className="configurations-list">
                        <h2>Last Configurations</h2>

                        {lastConfigurations?.length > 0 ? (
                            <ul>
                                {lastConfigurations.map(configuration => (
                                    <li key={configuration._id}>
                                        <Link to={`/configurations/${configuration._id}/info`}>
                                            {configuration.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>No Configurations Yet</p>
                        )}

                    </main>
                    {isAuthenticated && (
                        <aside className="configurations-list">
                            <h2>My Configurations</h2>

                            {myConfigurations?.length > 0 ? (
                                <ul>
                                    {myConfigurations.map(configuration => (
                                        <li key={configuration._id}>
                                            <Link to={`/configurations/${configuration._id}/info`}>
                                                {configuration.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p>You haven't added any configurations yet.</p>
                            )}
                        </aside>
                    )}
                </section>

            </div >
        </>
    );
}