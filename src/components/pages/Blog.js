import BlogList from "../BlogList";
import HeaderTitle from "../HeaderTitle";

export default function Blog({ type }) {
    return (
        <>
            <HeaderTitle title="Blog" />
            <BlogList
                type={type}
                itemsPerPage={9}
                className="flex flex-col w-screen min-h-[200px] gap-y-4 items-center lg:mt-2 lg:grid
                     lg:grid-rows-portfolio-row lg:grid-cols-portfolio-col
                      lg:justify-center lg:gap-16"
            />
        </>
    );
}
