// Replace if statements with switch case

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function ButtonTypeProperties(type) {
    switch (type) {
        case "transparent":
            return "bg-transparent border-gray-50 border-2 border-solid ";
        case "red":
            return "bg-red-button ";
        case "submit":
            return "bg-red-button ";
        case "social":
            return " ";
    }
}

export default function Button({
    text,
    onClick,
    className,
    type,
    to,
    icon,
    href,
    onSubmit,
    chosenButton,
}) {
    if (type !== "social" && type !== "admin-icon") {
        return (
            <Link to={to} className="w-full lg:w-48">
                <button
                    onClick={onClick}
                    onSubmit={onSubmit}
                    type={type === "submit" ? "submit" : "button"}
                    className={
                        className +
                        " rounded-sm h-12 w-full text-lg font-bold transition duration-300 hover:scale-105 " +
                        ButtonTypeProperties(type)
                    }
                >
                    {text}
                </button>
            </Link> // might be broken. Check this
        );
    } else if (type === "admin-icon") {
        return (
            <Link
                to={to}
                className={
                    " w-full md:flex md:items-center h-auto  group rounded-lg " +
                    (chosenButton === this ? " bg-whit3 text-blue-700" : " ") +
                    className
                }
            >
                <FontAwesomeIcon
                    icon={icon}
                    className="admin-icon text-white group-hover:text-blue-700 transition duration-500 hover:bg-white "
                    aria-label="icon-with-link"
                />{" "}
                <div className="hidden md:block text-white group-hover:text-blue-700">
                    {text ? text : "#Title"}
                </div>
            </Link>
        );
    } else {
        return (
            <a href={href} target="_blank">
                {" "}
                <img
                    src={icon}
                    className="h-12 w-12 bg-cover"
                    alt="redirecting-icon"
                />
            </a>
        );
    }
}
