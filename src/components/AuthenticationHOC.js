import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "./AuthHook";

const isAuthenticated = () => {
    return localStorage.getItem("token") !== null;
};

const AuthenticatedComponent = (Component) => {
    return function WrappedComponent(props) {
        const navigate = useNavigate();
        const [isAuthenticated,loading] = useAuth();

        useEffect(() => {
            if (!isAuthenticated && !loading) {
                navigate("/login");
            }
        }, [loading,isAuthenticated]);

        if (isAuthenticated) {
            return <Component {...props} />;
        }
    };
};
export default AuthenticatedComponent;
