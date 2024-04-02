import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
// Create the AuthContext

// Create the AuthProvider component
export const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = Cookies.get("token");
        const username = Cookies.get("username");
        console.log(token + " " + username)
        if (token && username) {
            axios
                .post(
                    "https://my-portfolio-expressjs.onrender.com/verify/",//localhost will be 
                    {
                        token: token,
                        username: username,
                    },
                    { withCredentials: true }
                )
                .then((response) => {
                    if (response.status === 200) {
                        setIsAuthenticated(true);
                    }
                    setLoading(false);
                })
                .catch((error) => {
                    setIsAuthenticated(false);
                    setLoading(false);
                });
        } else {
            setLoading(false);
        }
    }, []);

    return [isAuthenticated, loading, setIsAuthenticated];
};
