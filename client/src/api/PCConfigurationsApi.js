import { useEffect, useState } from "react";
import requester from "../requests/requester";
import useUserAuth from "../hooks/useUserAuth";

const url = 'http://localhost:3030/data/configurations';

export const useAllConfigurations = () => {
    const [configurations, setConfigurations] = useState([]);

    useEffect(() => {
        requester.get(url)
            .then(setConfigurations);
    }, []);

    return { configurations };
};

export const useOneConfiguration = (configurationId) => {
    const [configuration, setConfiguration] = useState({});

    useEffect(() => {
        requester.get(`${url}/${configurationId}`)
            .then(setConfiguration);
    }, [configurationId]);

    return { configuration };
};

export const useLastConfigurations = () => {
    const [lastConfigurations, setLastConfigurations] = useState([]);

    useEffect(() => {
        const searchParams = new URLSearchParams({
            sortBy: '_createdOn desc',
            pageSize: 3,
            select: '_id,name'
        });

        requester.get(`${url}?${searchParams.toString()}`)
            .then(setLastConfigurations);
    }, []);

    return { lastConfigurations };
};

export const useOwnerConfigurations = (ownerId) => {
    const [myConfigurations, setMyConfigurations] = useState([]);

    useEffect(() => {
        if (!ownerId) return; 

        const searchParams = new URLSearchParams({
            where: `_ownerId="${ownerId}"`,
            sortBy: '_createdOn desc'
        });

        requester.get(`${url}?${searchParams.toString()}`)
            .then(setMyConfigurations);
    }, [ownerId]);

    return { myConfigurations };
};

export const useAddConfiguration = () => {
    const { requests } = useUserAuth();

    const add = (configurationData) => requests.post(url, configurationData);

    return {
        add
    }
};

export const useEditConfiguration = () => {
    const { requests } = useUserAuth();

    const edit = (configurationId, configurationData) =>
        requests.put(`${url}/${configurationId}`, { ...configurationData, _id: configurationId });

    return { edit };
};

export const useDeleteConfiguration = () => {
    const { requests } = useUserAuth();

    const deleteConfiguration = (configurationId) => requests.delete(`${url}/${configurationId}`);

    return { deleteConfiguration };
};