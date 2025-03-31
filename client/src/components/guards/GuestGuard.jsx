import { Navigate, Outlet } from "react-router";
import useUserAuth from "../../hooks/useUserAuth";

export default function GuestGuard() {
    const { isAuthenticated } = useUserAuth();

    if (isAuthenticated) {
        return <Navigate to="/" />
    }

    return <Outlet />;
}
