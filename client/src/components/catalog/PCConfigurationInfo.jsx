import { useNavigate, useParams } from "react-router";
import useUserAuth from "../../hooks/useUserAuth";
import { useDeleteConfiguration, useOneConfiguration } from "../../api/PCConfigurationsApi";
import { toast } from "react-toastify";

export default function PCConfigurationInfo() {
    const navigate = useNavigate();
    const { userId } = useUserAuth();
    const { configurationId } = useParams();
    const { configuration } = useOneConfiguration(configurationId);
    const { deleteConfiguration } = useDeleteConfiguration();

    const configurationDeleteHandler = async () => {
        const hasConfirm = confirm(`Are you sure you want to delete ${configuration.name}?`);

        if (!hasConfirm) {
            toast.info("Deletion canceled.");
            return;
        }

        try {
            await deleteConfiguration(configurationId);
            navigate('/configurations');
            toast.success('Successfully Deleted');
        } catch (err) {
            toast.error(err.message);
        }
    }

    const configurationEditHandler = () => navigate(`/configurations/${configurationId}/edit`);


    const isOwner = userId === configuration._ownerId;

    return (
        <div className="configuration-details">
            <h2>Configuration Info</h2>
            <div className="image-container">
                <img src={configuration.image} alt="Configuration Image" />
            </div>
            <p>Likes: {configuration.likes}</p>
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
                    <button className="details-btn">Like</button>

                    <button onClick={configurationEditHandler} className="details-btn">Edit</button>

                    <button onClick={configurationDeleteHandler} className="details-btn">Delete</button>
                </>
            )}
        </div >
    );
}   