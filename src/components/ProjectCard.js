import { Link } from "react-router-dom";
import Button from "./Button";

export default function ProjectCard({
    className,
    image,
    title,
    label,
    to,
    layout,
}) {
    const isAdmin = layout === "admin";
    const imageSrc = !isAdmin ? image.slice() : "";
    const toPath = isAdmin ? "/admin" + to.path : to.path;

    return (
        <Link
            to={toPath}
            state={to.state}
            style={{ backgroundImage: `url(${imageSrc})` }}
            className={
                `h-[400px] w-11/12 bg-cover p-5 text-white flex
            flex-col justify-end rounded-md lg:w-full transition duration-300 
            hover:scale-[100.5%] cursor-pointer ` +
                (layout === "admin"
                    ? "  !text-blue-700 bg-good-gray hover:bg-white border-2 border-black !h-[10%] w-full justify-center rounded-sm  "
                    : "") +
                className
            }
        >
            <h2
                className={
                    "text-3xl font-bold  text-stroke-3" +
                    (layout === "admin" ? "text-xl " : "")
                }
            >
                {title}
            </h2>
            <h3
                className={
                    "text-lg text-gray-300 " +
                    (layout === "admin" ? "text-md " : "")
                }
            >
                {label}
            </h3>
            <h4 className={"text-lg  " + (layout === "admin") && " hidden"}>
                Click to see details
            </h4>

        </Link>
    );
}
