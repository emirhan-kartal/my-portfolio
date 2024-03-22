import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAuthContext } from "./AuthContext";

const isAuthenticated = () => {
    return localStorage.getItem("token") !== null;
};

const AuthenticatedComponent = (Component) => {
    return function WrappedComponent(props) {
        const navigate = useNavigate();
        const { isAuthenticated, setIsAuthenticated } = useAuthContext();

        useEffect(() => {
            if (!isAuthenticated) {
                navigate("/login");
            }
        }, [isAuthenticated]);

        if (isAuthenticated) {
            return <Component {...props} />;
        }
    };
};
export default AuthenticatedComponent;
