import { useContext, useEffect } from "react";
import requester from "../requests/requester";
import { UserContext } from "../context/UserContext";


const url = 'http://localhost:3030/users';

export const useLogin = () => {
    const login = async (email, password) =>
        requester.post(`${url}/login`, { email, password });

    return { login };
};

export const useRegister = () => {
    const register = (email, password) =>
        requester.post(`${url}/register`, { email, password });

    return { register };
};

export const useLogout = () => {
    const { accessToken, userLogoutHandler } = useContext(UserContext);

    useEffect(() => {
        if (!accessToken) {
            return;
        }

        const options = {
            headers: {
                'X-Authorization': accessToken,
            }
        };

        requester.get(`${url}/logout`, null, options)
            .then(userLogoutHandler);

    }, [accessToken, userLogoutHandler]);

    return { isLoggedOut: !!accessToken };
};