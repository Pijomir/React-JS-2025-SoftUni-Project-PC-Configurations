import { useState } from "react";
import { useNavigate } from "react-router";
import { useAddConfiguration } from "../../api/PCConfigurationsApi";
import { toast } from "react-toastify";

export default function PCConfigurationAdd() {
    const navigate = useNavigate();
    const { add } = useAddConfiguration();

    const [formData, setFormData] = useState({
        name: "",
        motherboard: "",
        cpu: "",
        gpu: "",
        ram: "",
        storage: "",
        psu: "",
        case: "",
        image: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((currentData) => ({
            ...currentData,
            [name]: value,
        }));
    };

    const addAction = async (e) => {
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
        if (!urlRegex.test(formData.image)) {
            toast.error("Invalid image URL. Must be a valid link to an image.");
            return;
        }

        try {
            await add(formData);
            navigate('/configurations');
            toast.success('Successfully Added');
        } catch (err) {
            toast.error(`Error: ${err.message}`);
        }
    };

    return (
        <div className="container">
            <h1>Add your PC configuration here:</h1>
            <form onSubmit={addAction}>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange} 
                    placeholder="Name"
                    
                />
                <input
                    type="text"
                    name="motherboard"
                    value={formData.motherboard}
                    onChange={handleChange} 
                    placeholder="Motherboard"
                    
                />
                <input
                    type="text"
                    name="cpu"
                    value={formData.cpu}
                    onChange={handleChange} 
                    placeholder="CPU"
                    
                />
                <input
                    type="text"
                    name="gpu"
                    value={formData.gpu}
                    onChange={handleChange} 
                    placeholder="GPU"
                />
                <input
                    type="text"
                    name="ram"
                    value={formData.ram}
                    onChange={handleChange} 
                    placeholder="RAM"
                    
                />
                <input
                    type="text"
                    name="storage"
                    value={formData.storage}
                    onChange={handleChange} 
                    placeholder="Storage"
                    
                />
                <input
                    type="text"
                    name="psu"
                    value={formData.psu}
                    onChange={handleChange} 
                    placeholder="PSU"
                    
                />
                <input
                    type="text"
                    name="case"
                    value={formData.case}
                    onChange={handleChange} 
                    placeholder="Case"
                    
                />
                <input
                    type="text"
                    name="image"
                    value={formData.image}
                    onChange={handleChange} 
                    placeholder="Image"
                    
                />
                <button type="submit">Add Configuration</button>
            </form>
        </div>
    );
}
