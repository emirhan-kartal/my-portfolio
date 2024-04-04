import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "./hooks/AuthHook";

const withAuth = (Component) => {
    return function WrappedComponent(props) {
        const navigate = useNavigate();
        const [isAuthenticated,loading] = useAuth();

        useEffect(() => {
            if (!isAuthenticated && !loading) {
                console.log("boyle bir sey oldu")
                navigate("/login");
            }
        }, [loading,isAuthenticated]);

        if (isAuthenticated) {
            return <Component {...props} />;
        }
    };
};
export default withAuth;
