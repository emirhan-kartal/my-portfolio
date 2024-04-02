import Bitmap from "../../resources/Bitmap.png";
import Button from "../Button";
import axios from "axios";
function Main() {
    return (
        <>
            <section
                className="bg-mobile bg-cover w-screen min-h-[880px] pt-[76px]
                z-0 px-6 py-4 text-2xl text-white flex flex-col justify-center gap-y-7 mb-8 lg:bg-desktop lg:min-h-[700px] lg:flex-row lg:items-center "
            >
                <div className="flex flex-col gap-y-4  cursor-default lg:gap-y-8 lg:w-96 ">
                    <h3 className="mt-7">Personal Portfolio</h3>
                    <h1 className="text-5xl font-bold g-[4rem]">
                        Frontend Development
                    </h1>
                    <p className="leading-8 text-xl">
                        "Action speaks louder than words." Welcome to my website
                        where I showcase my learning journey.
                    </p>
                    <div className="flex items-center gap-x-4">
                        <Button text="About" type="red" to="/about" />

                        <Button
                            text="Download CV"
                            type="transparent"
                            onClick={() => {
                                axios({
                                    url: "https://my-portfolio-expressjs.onrender.com/cv",
                                    method: "GET",
                                    responseType: "blob", // Important
                                }).then((response) => {
                                    const url = window.URL.createObjectURL(
                                        new Blob([response.data])
                                    );
                                    const link = document.createElement("a");
                                    link.href = url;
                                    link.setAttribute("download", "CV-1.pdf"); // or any other extension
                                    document.body.appendChild(link);
                                    link.click();
                                });
                            }}
                        />
                    </div>
                </div>
                <img
                    src={Bitmap}
                    alt="me"
                    className="relative -left-6 lg:h-[500px]"
                ></img>
            </section>
        </>
    );
}

export default Main;
