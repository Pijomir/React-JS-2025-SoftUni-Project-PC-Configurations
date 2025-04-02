import { Navigate } from "react-router";
import { useLogout } from "../../api/UserApi";

export default function Logout() {
    const { isLoggedOut } = useLogout();

    return isLoggedOut ? <Navigate to="/" /> : null;

}