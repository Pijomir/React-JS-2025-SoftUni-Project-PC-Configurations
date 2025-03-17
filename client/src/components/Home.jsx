import { Link } from "react-router";

export default function Home() {
    return (
        <>
            <div className="home">
                <h1>Покажете компютърните си конфигурации</h1>
                <p>Тук можете да разглеждате наличните PC конфигурации.</p>

                <div className="configurations-list">
                    <h2>Съществуващи конфигурации</h2>
                    <ul>
                        <li>
                            <Link to="/details/1">Конфигурация 1</Link>
                        </li>
                        <li>
                            <Link to="/details/2">Конфигурация 2</Link>
                        </li>
                        <li>
                            <Link to="/details/3">Конфигурация 3</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}