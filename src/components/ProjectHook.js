import { useEffect, useState } from "react";
import axios from "axios";

export const useProjects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("https://my-portfolio-expressjs.onrender.com/projects/").then((response) => {
            setProjects(response.data);
            setLoading(false);
        });
    }, []);

    return [projects, loading];
};
