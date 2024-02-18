import { useCurrentToken } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hooks";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import Swal from "sweetalert2";

const PrivateRoute = ({ children }: { children: ReactNode }) => {
    const token = useAppSelector(useCurrentToken);
    if (!token) {
        Swal.fire({
            title: 'Error!',
            text: 'Please login first!',
            icon: 'error',
            confirmButtonText: 'Cool'
        })
        return <Navigate to="/login" replace={true} />
    }
    return children
};

export default PrivateRoute;