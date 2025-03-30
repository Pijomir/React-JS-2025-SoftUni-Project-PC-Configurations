import { Link } from "react-router";

export default function PCConfiguration({
    _id,
    image,
    name
}) {

    return (
        <div className="configuration">
            <h2>{name}</h2>

            <div className="image-container">
                <img src={image} alt="Configuration Image" />
            </div>

            <Link to={`/configurations/${_id}/info`}>
                <button className="details-btn">Details</button>
            </Link>
        </div>
    );
}