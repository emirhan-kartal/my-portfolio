import { useEffect, useState } from "react";

export default function Pagination({
    className,
    itemsPerPage,
    elements,
    type,
}) {
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentPage]);

    const totalPages = Math.ceil(elements.length / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = type === "section" ? 2 : startIndex + itemsPerPage;

    const currentItems = elements.slice(startIndex, endIndex);

    const handleClick = (index) => setCurrentPage(index);

    return (
        <>
            <div className={className}>
                {currentItems.map((e) => {
                    return e;
                })}
            </div>
            <div className={type === "section" && "hidden"}>
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        className={
                            `m-2 h-10 w-10 border-2 border-black rounded-lg ` +
                            (index + 1 === currentPage
                                ? ` bg-black text-white`
                                : ` bg-white text-black`)
                        }
                        onClick={() => handleClick(index + 1)}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </>
    );
}
