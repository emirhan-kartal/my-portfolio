import { SpinningAnimation, Pagination, Button } from "./index";

export default function ContentList({
    className,
    itemsPerPage = 4,
    elements,
    type,
    loading,
    contentType, //either blogs or projects
}) {
    const toReturn = (
        <>
            {elements.length === 0 && !loading ? (
                <h1 className="text-4xl text-center">No elements yet.</h1>
            ) : (
                loading && <SpinningAnimation />
            )}
            <Pagination
                itemsPerPage={itemsPerPage}
                type={type}
                className={className}
                elements={elements}
            />
            {/*             <div className={className}></div>
             */}{" "}
        </>
    );
    return type === "admin" ? (
        <div className="flex w-full flex-col items-center">
            <div className="w-full h-[6vh] bg-good-gray flex items-center justify-end">
                <Button
                    to={`/admin/${contentType}/add`}
                    text="Add New Project "
                    className="bg-green-500 hover:bg-green-700 text-white w-full font-bold py-2 px-4 h-10/12 rounded "
                >
                    Add New Content
                </Button>
            </div>

            {toReturn}
        </div>
    ) : (
        <>{toReturn}</>
    );
}
