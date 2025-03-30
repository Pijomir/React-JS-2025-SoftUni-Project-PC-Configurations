import { useNavigate } from "react-router";

import { useAddConfiguration } from "../../api/PCConfigurationsApi";

export default function PCConfigurationAdd() {
    const navigate = useNavigate();
    const { add } = useAddConfiguration();

    const addAction = async (formData) => {
        const configurationData = Object.fromEntries(formData);

        await add(configurationData);
        
        navigate('/configurations');
    };

    return (
        <div className="container">
            <h1>Add your PC configuration here:</h1>
            <form action={addAction}>
                <input type="text" name="name" placeholder="Name" />
                <input type="text" name="motherboard" placeholder="Motherboard" />
                <input type="text" name="cpu" placeholder="CPU" />
                <input type="text" name="gpu" placeholder="GPU" />
                <input type="text" name="ram" placeholder="RAM" />
                <input type="text" name="storage" placeholder="Storage" />
                <input type="text" name="psu" placeholder="PSU" />
                <input type="text" name="case" placeholder="Case" />
                <input type="text" name="image" placeholder="Image" />
                <button type="submit">Add Configuration</button>
            </form>
        </div>
    );
}