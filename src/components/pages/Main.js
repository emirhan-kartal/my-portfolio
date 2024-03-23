import MobileBg from "../../resources/bg-mobile.png";
import Bitmap from "../../resources/Bitmap.png";
import Button from "../Button";
import { Link } from "react-router-dom";

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

                        <Button text="Learn More" type="transparent" />     
                    </div>
                </div>
                <img src={Bitmap} className="relative -left-6 lg:h-[500px]"></img>
            </section>
        </>
    );
}

export default Main;
