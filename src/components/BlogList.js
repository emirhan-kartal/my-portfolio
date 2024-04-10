import BlogCard from "./BlogCard";
import { useBlogs } from "./hooks/BlogHook";
import { ContentList } from "./index";
const BlogList = ({ layout, className, type, itemsPerPage = 4 }) => {
    const limit = type === "section" ? 2 : 0;

    const [blogs, loading] = useBlogs(undefined, limit);
    const elements = blogs.map((blog) => {
        return (
            <BlogCard
                to={{
                    path: `/blogs/${blog._id}`,
                    state: { blog: blog },
                }}
                key={blog._id}
                image={blog.imageLink}
                title={blog.title}
                content={blog.content}
                
            />
        );
    });
    return (
        <ContentList
            elements={elements}
            contentType="blogs"
            className={className}
            type={type}
            itemsPerPage={itemsPerPage}
            loading={loading}
        />
    );
};

export default BlogList;
