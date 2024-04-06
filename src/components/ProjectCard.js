import { Link } from "react-router-dom";

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
            //style={{ backgroundImage: `url(${imageSrc})` }}
            className={
                `h-[400px] w-11/12 bg-cover text-white flex
            flex-col justify-start rounded-xl lg:w-full transition duration-300 
            hover:scale-[100.5%] cursor-pointer bg-special-blue ` +
                (isAdmin
                    ? "  !text-blue-700 bg-good-gray hover:bg-white border-2 border-black !h-[10%] w-full justify-center rounded-sm  "
                    : "") +
                className
            }
        >
            <img
                src={imageSrc}
                style={({ width: "50%" }, { height: "300px" })}
                className="rounded-xl"
            />
            <div className="p-4">
                <h2
                    className={
                        "text-3xl font-bold " +
                        (isAdmin ? "text-xl " : "")
                    }
                >
                    {title}
                </h2>
                <h3
                    className={
                        "text-lg text-gray-300 " + (isAdmin ? "text-md " : "")
                    }
                >
                    {label}
                </h3>
                <h4 className={"text-lg  " + isAdmin && " hidden"}>
                    Click to see details
                </h4>
            </div>
        </Link>
    );
}
