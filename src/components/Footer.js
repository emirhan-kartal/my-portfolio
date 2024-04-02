import Button from "./Button";
import Linkedin from "../resources/linkedin-icon.png";
import Github from "../resources/github-icon.png";
export default function Footer() {
    return (
        <footer
            className="bg-special-blue min-h-[500px] max-h-[944px]
         w-screen text-white pt-20 pb-4 px-5 flex flex-col"
        >
            <h1 className="text-4xl mb-8">
                <abbr title="EMIRHAN KARTAL" className="no-underline">
                    EMIRHAN K.
                </abbr>
            </h1>

            <span className="mb-4 text-2xl">+90 542 249 87 29</span>
            <span className="mb-8 text-xl">e.kartal115@gmail.com</span>
            <span className="mb-16 text-xl">Antalya,Turkiye</span>
            <hr />

            <div className="flex gap-x-4 mt-10 mb-6 self-center">
                <Button
                    type="social"
                    icon={Linkedin}
                    href="https://www.linkedin.com/in/emirhan-kartal-612ab618a/"
                />
                <Button
                    type="social"
                    icon={Github}
                    href="https://github.com/emirhan-kartal"
                />
            </div>
            <div className="text-center mt-10 text-gray-200 justify-self-end">
                @ 2024 Emirhan Kartal | Made using{" "}
                <a className="text-blue-700 font-bold" href="https://react.dev">
                    React
                </a>{" "}
                &{" "}
                <a
                    className="text-blue-700 font-bold"
                    href="https://tailwindcss.com"
                >
                    TailwindCSS
                </a>
                .
            </div>
        </footer>
    );
}
