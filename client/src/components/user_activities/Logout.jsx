import { Navigate } from "react-router";
import { useLogout } from "../../api/UserApi";
import { toast } from "react-toastify";

export default function Logout() {
    const { isLoggedOut } = useLogout();
    toast.success('Successful Logout');

    return isLoggedOut ? <Navigate to="/" /> : null;

}