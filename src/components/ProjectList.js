import React, { useEffect, useState } from "react";
import axios from "axios";
import ProjectCard from "./ProjectCard";
import { useProjects, useProjectsContext } from "./ProjectHook";
import Button from "./Button";
const ProjectList = ({ layout, className, type, itemsPerPage = 4 }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [projects, loading] = useProjects();
    const totalPages = Math.ceil(projects.length / itemsPerPage);

    const handleClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    const limit = type === "section" ? 2 : 0;
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentPage]);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = type === "section" ? 2 : startIndex + itemsPerPage;
    const currentItems = projects.slice(startIndex, endIndex);

    const toReturn = (
        <>
            {projects.length === 0 && (
                <h1 className="text-4xl">You haven't added projects yet.</h1>
            )}
            <div className={className}>
                {currentItems.map((project) => {
                    return (
                        <ProjectCard
                            key={project._id}
                            image={project.imageLink}
                            title={project.title}
                            label={project.label}
                            layout={layout}
                            to={{
                                path: `/projects/${project._id}`,
                                state: { project: project },
                            }}
                        />
                    );
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
    return type === "admin" ? (
        <div className="flex w-full flex-col items-center">
            <div className="w-full h-[6vh] bg-good-gray flex items-center justify-end">
                <Button
                    to="/admin/projects/add"
                    text="Add New Project "
                    className="bg-green-500 hover:bg-green-700 text-white w-full font-bold py-2 px-4 h-10/12 rounded "
                >
                    Add New Project
                </Button>
            </div>

            {toReturn}
        </div>
    ) : (
        <>{toReturn}</>
    );
};

export default ProjectList;
