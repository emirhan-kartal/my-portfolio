import { useParams } from "react-router";
import { useProjects } from "./hooks/ProjectHook";
import { ContentForm } from "./index";

export default function EditContentForm() {
    const params = useParams();
    const projectId = params.projectId;
    const [projects, loading] = useProjects();
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
    return <ContentForm project={project}  />;
}
