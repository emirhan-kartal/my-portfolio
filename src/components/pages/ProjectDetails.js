import React from "react";
import HeaderTitle from "../HeaderTitle";
import { useParams } from "react-router";
import Markdown from "react-markdown";
import { useProjectsContext } from "../ProjectsContext";

const ProjectDetails = (props) => {
    const { projects, loading } = useProjectsContext();
    const { projectId } = useParams();

    if (loading) {
        return <div>Loading...</div>;
    }
    const project = projects.find((temp) => temp._id === projectId);

    const { title, label, content, image_links, tags } = project;

    return (
        <>
            <HeaderTitle title={title} />

            <div id="markdown" className="flex flex-col items-center">
                <h1 className="text-5xl font-bold mt-12 ">{title}</h1>
                <h3 className="text-xl font-semibold text-gray-400 mb-4">
                    {label}
                </h3>

                <Markdown
                    className="flex flex-col items-center"
                    components={{
                        h1: ({ children }) => (
                            <h1 className="text-4xl font-bold">{children}</h1>
                        ),
                        h2: ({ children }) => (
                            <h2 className="text-3xl font-bold">{children}</h2>
                        ),
                        h3: ({ children }) => (
                            <h3 className="text-2xl font-bold">{children}</h3>
                        ),
                        h4: ({ children }) => (
                            <h4 className="text-xl font-bold">{children}</h4>
                        ),
                        h5: ({ children }) => (
                            <h5 className="text-lg font-bold">{children}</h5>
                        ),
                        h6: ({ children }) => (
                            <h6 className="text-base font-bold">{children}</h6>
                        ),
                    }}
                >
                    {" " +
                        content +
                        "\n" +
                        "![alt text](https://fastly.picsum.photos/id/22/400/500.jpg?hmac=BOJ-dXqoE5e0YvtRXISpZ8AxOxhISmU8vp4Rs9O2bOU) "}
                </Markdown>
                <h3 className="text-md font-bold text-gray-400 self-start">
                    Tags:
                </h3>

                <h3 className="text-sm font-semibold mb-8 self-start ">
                    {tags}
                </h3>
            </div>
        </>
    );
};

export default ProjectDetails;
