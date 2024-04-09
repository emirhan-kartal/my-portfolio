import ProjectCard from "./ProjectCard";
import { useProjects } from "./hooks/ProjectHook";
import { ContentList } from "./index";
const ProjectList = ({ layout, className, type, itemsPerPage = 4 }) => {
    const limit = type === "section" ? 2 : 0;

    const [projects, loading] = useProjects(undefined, limit);
    const elements = projects.map((project) => {
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
    });
    return (
        <ContentList
            elements={elements}
            contentType="projects"
            className={className}
            type={type}
            itemsPerPage={itemsPerPage}
            loading={loading}
        />
    );
};

export default ProjectList;
