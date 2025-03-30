import { Link, useNavigate, useParams } from "react-router";
import useUserAuth from "../../hooks/useUserAuth";
import { useDeleteConfiguration, useOneConfiguration } from "../../api/PCConfigurationsApi";

export default function PCConfigurationInfo() {
    const navigate = useNavigate();
    const { _id: userId } = useUserAuth();
    const { configurationId } = useParams();
    const { configuration } = useOneConfiguration(configurationId);
    const { deleteConfiguration } = useDeleteConfiguration();

    const configurationDeleteHandler = async () => {
        // const hasConfirm = confirm(`Are you sure you want to delete ${configuration.name}?`);

        // if (!hasConfirm) {
        //     return;
        // }

        await deleteConfiguration(configurationId);

        navigate('/configurations');
    }

    const isOwner = userId === configuration._ownerId;

    return (
        <div class="configuration-details">
            <h2>Configuration Info</h2>
            <div className="image-container">
                <img src={configuration.image} alt="Configuration Image" />
            </div>
            <ul>
                <li><strong>Name:</strong> {configuration.name}</li>
                <li><strong>Motherboard:</strong> {configuration.motherboard}</li>
                <li><strong>CPU:</strong> {configuration.cpu}</li>
                <li><strong>GPU:</strong> {configuration.gpu}</li>
                <li><strong>RAM:</strong> {configuration.ram}</li>
                <li><strong>Storage:</strong> {configuration.storage}</li>
                <li><strong>PSU:</strong> {configuration.psu}</li>
                <li><strong>Case:</strong> {configuration.case}</li>
            </ul>

            {isOwner && (
                <>
                    <Link>
                        <button className="details-btn">Edit</button>
                    </Link>
                    <Link>
                        <button onClick={configurationDeleteHandler} className="details-btn">Delete</button>
                    </Link>
                </>
            )}
        </div >
    );
}   