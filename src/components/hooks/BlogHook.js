import { useEffect, useState } from "react";
import axios from "axios";

export const useBlogs = (id,limit) => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    let getRequest = "http://localhost:3001/blogs";
    console.log(id);
    if (id) {
        getRequest += "/" + id;
    } else if (limit) {
        getRequest += "?limit=" + limit;
    }
    useEffect(() => {
        axios.get(getRequest).then((response) => {
            /**https://my-portfolio-expressjs.onrender.com/projects/ */
            setBlogs(response.data);
            setLoading(false);
        });
    }, []);

    return [blogs, loading];
};
