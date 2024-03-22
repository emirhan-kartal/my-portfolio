import { useParams } from "react-router";
import ProjectForm from "./ProjectForm";
import { useProjectsContext } from "./ProjectsContext";

export default function EditProjectForm() {
    const params = useParams();
    const projectId = params.projectId;
    const { projects, loading } = useProjectsContext();
    if (loading) {
        return <div>Loading...</div>;
    }
    if (!Array.isArray(projects)) {
        return <div>Error: Projects data is not available.</div>;
    }
    const project = projects.find((temp) => temp._id === projectId);
    if (!project) {
        return <div>Error: Project not found.</div>;
    }
    return <ProjectForm project={project} />;
}
