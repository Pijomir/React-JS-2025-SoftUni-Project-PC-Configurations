import { useNavigate, useParams } from "react-router";
import { useEditConfiguration, useOneConfiguration } from "../../api/PCConfigurationsApi";

export default function PCConfigurationEdit() {
    const navigate = useNavigate();
    const { configurationId } = useParams();
    const { configuration } = useOneConfiguration(configurationId);
    const { edit } = useEditConfiguration();

    const editAction = async (formData) => {
        const configurationData = Object.fromEntries(formData);

        await edit(configurationId, configurationData);

        navigate(`/configurations/${configurationId}/info`);
    }
    

    return (
        <div className="container">
            <h1>Add your PC configuration here:</h1>
            <form action={editAction}>
                <input type="text" name="name" placeholder="Name" defaultValue={configuration.name} />
                <input type="text" name="motherboard" placeholder="Motherboard" defaultValue={configuration.motherboard} />
                <input type="text" name="cpu" placeholder="CPU" defaultValue={configuration.cpu} />
                <input type="text" name="gpu" placeholder="GPU" defaultValue={configuration.gpu} />
                <input type="text" name="ram" placeholder="RAM" defaultValue={configuration.ram} />
                <input type="text" name="storage" placeholder="Storage" defaultValue={configuration.storage} />
                <input type="text" name="psu" placeholder="PSU" defaultValue={configuration.psu} />
                <input type="text" name="case" placeholder="Case" defaultValue={configuration.case} />
                <input type="text" name="image" placeholder="Image" defaultValue={configuration.image} />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}