import { useParams } from "react-router";
import PageDetails from "../PageDetails";
import { useBlogs } from "../hooks/BlogHook";
import { SpinningAnimation } from "../index";

export default function BlogDetails() {
    const { blogId } = useParams();
    const [blogs, loading] = useBlogs(blogId);

    if (loading) {
        return <SpinningAnimation />;
    }
    const { title, content, tags } = blogs;

    return <PageDetails title={title} content={content} tags={tags} />;
}
