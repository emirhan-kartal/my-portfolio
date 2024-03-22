import { useEffect, createContext, useState, useContext } from "react";
import axios from "axios";
export const ProjectsContext = createContext();

export const ProjectProvider = ({ children }) => {
    const [projects, setProjects] = useState([]);
    const [loading,setLoading] = useState(true);
    useEffect(() => {
        axios.get("https://my-portfolio-expressjs.onrender.com/projects/").then((response) => {
            setProjects(response.data);
            setLoading(false)
            
        });
    }, []);
    return (<ProjectsContext.Provider value={{ projects,loading }}>
        {children}
    </ProjectsContext.Provider>);
};
export const useProjectsContext = () => useContext(ProjectsContext);
