import Button from "../Button";
import ProjectList from "../ProjectList";
import HeaderTitle from "../HeaderTitle";

export default function Portfolio({ type }) {
    return (
        <>
            {type === "page" && <HeaderTitle title="Portfolio" />}
            <div className="flex flex-col mt-8 gap-y-3 items-center px-6 mb-4 lg:mb-24">
                <div
                    className={
                        "flex flex-col w-full items-center " +
                        (type === "page" ? " hidden" : "")
                    }
                >
                    .<h2 className="text-red-400 text-xl">My Portfolio</h2>
                    <h3 className=" text-4xl font-bold">Some of My Work</h3>
                    <p className={"leading-8 text-xl font-semibold "}>
                        Success is not for the faint-hearted. It requires
                        dedication, discipline, and a relentless pursuit of your
                        goals.
                    </p>
                    <Button
                        text="Portfolio"
                        className="bg-white border-2 border-gray-300 
                text-zinc-700 w-[50%] p-1 font-bold self-start lg:w-full"
                        to="/portfolio"
                    />
                </div>
                <ProjectList
                    className="flex flex-col w-screen gap-y-4 items-center lg:mt-2 lg:grid
                     lg:grid-rows-portfolio-row lg:grid-cols-portfolio-col
                      lg:justify-center lg:gap-16"
                    type={type}
                ></ProjectList>
            </div>
        </>
    );
}
