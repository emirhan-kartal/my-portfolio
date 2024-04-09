import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useProjects } from "../hooks/ProjectHook";
import {PageDetails} from "../index";
import { SpinningAnimation } from "../index";
const ProjectDetails = () => {
    const { projectId } = useParams();
    const [projects, loading] = useProjects(projectId);

    if (loading) {
        return <SpinningAnimation />;
    }
    const { title, label, content, image_links, tags } = projects;


    return (
        <PageDetails
            title={title}
            label={label}
            content={content}
            tags={tags}
            type="Blog"
        />
    );
};

export default ProjectDetails;
