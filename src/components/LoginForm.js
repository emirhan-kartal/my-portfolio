import React, { useEffect, useState } from "react";
import Input from "./Input";
import axios from "axios";
import { useAuth } from "./AuthHook";
import { useNavigate } from "react-router";

const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [isAuthenticated, loading, setIsAuthenticated] = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/admin");
        }
    },[loading]);
    if (loading) return <div>Loading...</div>;

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        //send request to server with axios
        axios
            .post(
                "https://my-portfolio-expressjs.onrender.com/login/",
                {
                    username: username,
                    password: password,
                },
                {
                    withCredentials: true,
                }
            )
            .then((response) => {
                if (response.status === 200) {
                    setIsAuthenticated(true);
                    navigate("/admin");
                }
            })
            .catch((error) => {
                setIsAuthenticated(false);
                setError(true);
            });
    };

    return (
        <section className="flex justify-center items-center h-screen">
            <form
                onSubmit={handleSubmit}
                className="h-1/2 w-9/12 sm:w-1/2 md:w-1/3 lg:w-1/4 p-12 border-2 
                border-solid border-gray-200 rounded-xl flex flex-col gap-y-4"
            >
                <h1 className="font-bold text-2xl">Login</h1>
                <label
                    className={
                        "hidden h-2 text-sm text-red-500 absolute mt-7" +
                        (error && " !inline-block")
                    }
                >
                    Incorrect information
                </label>
                <Input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={handleUsernameChange}
                    className="rounded-xl border-gray-500 h-14"
                />
                <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                    className="rounded-xl border-gray-500 h-14"
                />
                <button
                    type="submit"
                    className=" text-white rounded-lg h-14 w-full text-lg font-bold transition duration-300 hover:scale-105 bg-green-500"
                >
                    Login
                </button>
            </form>
        </section>
    );
};

export default LoginForm;
