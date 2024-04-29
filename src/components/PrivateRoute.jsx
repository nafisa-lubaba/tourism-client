import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/Provider";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    if (loading) {
        return (
            <div className="text-center">
                <span className="loading loading-infinity loading-xs"></span>
                <span className="loading loading-infinity loading-sm"></span>
                <span className="loading loading-infinity loading-md"></span>
                <span className="loading loading-infinity loading-lg"></span>
            </div>
        );
    }
    if (!user) {
        return <Navigate to='/signin' state={location?.pathname || '/'}></Navigate>
    }
    return (
        <div>
            {children}

        </div>
    );
};

export default PrivateRoute;