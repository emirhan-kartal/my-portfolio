import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function ButtonTypeProperties(type) {
    if (type === "transparent")
        return "bg-transparent border-gray-50 border-2 border-solid ";
    else if (type === "red" || type === "submit") return "bg-red-button ";
    else if (type === "social") {
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
    onSubmit,chosenButton
}) {
    if (type !== "social" && type !== "admin-icon") {
        return (
            <Link to={to} className="w-full lg:w-40">
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
            </Link> //bozulmuş olabilir kontrol et sonra
        );
    } else if (type === "admin-icon") {
        return (
            <Link
                to={to}
                className={
                    " w-full md:flex md:items-center transition duration-500 hover:bg-white group rounded-lg " + (chosenButton === this ? "bg-white" : "") + 
                    className
                }
            >
                <FontAwesomeIcon icon={icon} className="admin-icon text-white group-hover:text-blue-700" />{" "}
                <div className="hidden md:block text-white group-hover:text-blue-700">
                    {text ? text :"#Title"}
                </div>
            </Link>
        );
    } else {
        return (
            <a href={href} target="_blank">
                {" "}
                <img src={icon} className="h-12 w-12 bg-cover" />
            </a>
        );
    }
}
