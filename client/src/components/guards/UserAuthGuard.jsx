import { Navigate, Outlet } from "react-router";
import useUserAuth from "../../hooks/useUserAuth";

export default function AuthGuard() {
    const { isAuthenticated } = (useUserAuth);

    if (!isAuthenticated) {
        return <Navigate to="/login" />
    }

    return <Outlet />;
}
