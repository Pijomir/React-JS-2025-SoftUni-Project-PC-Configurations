import { useNavigate, useParams } from "react-router";
import { useEditConfiguration, useOneConfiguration } from "../../api/PCConfigurationsApi";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";

export default function PCConfigurationEdit() {
    const navigate = useNavigate();
    const { configurationId } = useParams();
    const { configuration } = useOneConfiguration(configurationId);
    const { edit } = useEditConfiguration();

    const [formData, setFormData] = useState({});

    useEffect(() => {
        if (configuration) {
            setFormData({
                name: configuration.name,
                motherboard: configuration.motherboard,
                cpu: configuration.cpu,
                gpu: configuration.gpu,
                ram: configuration.ram,
                storage: configuration.storage,
                psu: configuration.psu,
                case: configuration.case,
                image: configuration.image
            });
        }
    }, [configuration]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((currentData) => ({
            ...currentData,
            [name]: value,
        }));
    };

    const editAction = async (e) => {
        e.preventDefault();


        for (const [key, value] of Object.entries(formData)) {
            if (!value.trim()) {
                toast.error(`Field "${key}" cannot be empty.`);
                return;
            }
        }

        if (formData.name.length < 3) {
            toast.error("Configuration name must be at least 3 characters.");
            return;
        }

        const urlRegex = /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp))$/i;
        if (formData.image && !urlRegex.test(formData.image)) {
            toast.error("Invalid image URL. Must be a valid link to an image.");
            return;
        }

        try {
            await edit(configurationId, formData);
            navigate(`/configurations/${configurationId}/info`);
            toast.success('Successfully Edited');
        } catch (err) {
            toast.error(`Грешка: ${err.message}`);
        }
    };

    return (
        <div className="container">
            <h1>Edit your PC configuration:</h1>
            <form onSubmit={editAction}>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Име"
                    required
                />
                <input
                    type="text"
                    name="motherboard"
                    value={formData.motherboard}
                    onChange={handleChange}
                    placeholder="Motherboard"
                    required
                />
                <input
                    type="text"
                    name="cpu"
                    value={formData.cpu}
                    onChange={handleChange}
                    placeholder="CPU"
                    required
                />
                <input
                    type="text"
                    name="gpu"
                    value={formData.gpu}
                    onChange={handleChange}
                    placeholder="GPU"
                    required
                />
                <input
                    type="text"
                    name="ram"
                    value={formData.ram}
                    onChange={handleChange}
                    placeholder="RAM"
                    required
                />
                <input
                    type="text"
                    name="storage"
                    value={formData.storage}
                    onChange={handleChange}
                    placeholder="Storage"
                    required
                />
                <input
                    type="text"
                    name="psu"
                    value={formData.psu}
                    onChange={handleChange}
                    placeholder="PSU"
                    required
                />
                <input
                    type="text"
                    name="case"
                    value={formData.case}
                    onChange={handleChange}
                    placeholder="Case"
                    required
                />
                <input
                    type="text"
                    name="image"
                    value={formData.image}
                    onChange={handleChange}
                    placeholder="Изображение (URL)"
                    required
                />
                <button type="submit">Edit</button>
            </form>
        </div>
    );
}
