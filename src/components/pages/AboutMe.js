import Me from "../../resources/me.png";
import Button from "../Button";
import Linkedin from "../../resources/linkedin-icon.png";
import Github from "../../resources/github-icon.png";
import HeaderTitle from "../HeaderTitle";

export default function AboutMe() {
    return (
        <>
            <HeaderTitle title="About Me" />

            <section
                className="flex flex-col m-7 p-7 rounded-md 
            bg-aboutme-blue text-white w-11/12 mx-auto my-4 h-auto 
            lg:min-h-[500px] lg:w-[40%] lg:text-xl "
            >
                <h1
                    className="text-5xl inline-block w-44 z-0 relative 
                font-semibold lg:mt-8"
                >
                    Emirhan <br />
                    Kartal
                </h1>
                <img
                    src={Me}
                    className="bg-cover h-40 w-40 rounded-full self-end mt-8 absolute "
                />
                <p className="mt-28 ">
                    Striving to become a successful Developer, his journey
                    commenced in 2014 at the age of 12, experimenting with
                    "Skript," a Python-like scripting language for Minecraft.
                    Addressing performance concerns, he transitioned to Java,
                    mastering the Bukkit API, a Minecraft-specific interface.He
                    published free plugins in the community.With a passion for
                    programming as a longtime hobby, he aspires to excel as
                    developer. Presently, he's immersed in Front-end projects
                </p>
                <div className="flex gap-x-4 mt-10 mb-6 self-start">
                    <Button
                        type="social"
                        href="https://github.com/emirhan-kartal"
                        icon={Github}
                    />

                    <Button
                        type="social"
                        href="https://www.linkedin.com/in/emirhan-kartal-612ab618a/"
                        icon={Linkedin}
                    />
                </div>
            </section>
            
        </>
    );
}
