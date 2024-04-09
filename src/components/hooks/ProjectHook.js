import { useEffect, useState } from "react";
import axios from "axios";

export const useProjects = (id, limit) => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    let getRequest = "https://my-portfolio-expressjs.onrender.com/projects";
    console.log(id)
    if (id) {
        getRequest += "/" + id;
    } else if (limit) {
        getRequest += "?limit=" + limit;
    }

    console.log(getRequest);
    useEffect(() => {
        axios.get(getRequest).then((response) => {
            /**https://my-portfolio-expressjs.onrender.com/projects/ */
            setProjects(response.data);
            setLoading( false);
        });
    }, []);

    return [projects, loading];
};
