import { useEffect, useState } from "react";
import axios from "axios";

export const useBlogs = (limit) => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get("https://my-portfolio-expressjs.onrender.com/blogs" + (limit && "?limit=" + limit))
            .then((response) => {
                /**https://my-portfolio-expressjs.onrender.com/projects/ */
                setBlogs(response.data);
                setLoading(false);
            });
    }, []);

    return [blogs, loading];
};
