import { Link } from "react-router-dom";

export default function BlogCard({imgSrc, title, content, to}) {
    return (
        <Link to={to}>
            <div className="h-[300px] w-[200px] rounded-2xl border-gray-300 border-2 ">
                <img
                    src={imgSrc}
                    className="rounded-2xl "
                    alt="..."
                />
                <div className="px-2">
                    <h5 className="font-bold text-xl">{title}</h5>
                    <p className="text-gray-500 text-sm">
                        {content}
                    </p>
                </div>
            </div>
        </Link>
    );
}
