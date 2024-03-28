import { useEffect, useState } from "react";
import axios from "axios";

export const useProjects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("http://localhost:3001/projects/").then((response) => {
            setProjects(response.data);
            setLoading(false);
        });
    }, []);

    return [projects, loading];
    /* return (<ProjectsContext.Provider value={{ projects,loading }}>
        {children}
    </ProjectsContext.Provider>); */
};

/* export const ProjectsContext = createContext();

export const ProjectProvider = ({children, value}) => {
    
    return <ProjectsContext.Provider value={value}>{children}</ProjectsContext.Provider>;
};

export function useProjectProvider() {
    return useContext(ProjectsContext);
} */
