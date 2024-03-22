import Button from "../Button";

export default function ContactSection() {
    return (
        <>
            <div
                className="bg-contact-section h-[496px] w-screen bg-cover
             text-white flex flex-col items-center justify-center gap-y-3 lg:bg-contact-section-desktop lg:h-[416px]"
            >
                <h1 className="w-72 text-5xl text-center ">
                    Let me know if you like to hire me
                </h1>
                <p className="w-80 text-gray-200 text-center text-xl mb-3 md:w-full ">
                    I would like us to contribute to each other along the way.
                </p>
                <div className="flex gap-x-4 w-screen px-4 lg:justify-center">
                    <Button text="Contact" type="red" className="w-1/2" to="/contact"/>
                    <Button text="About" type="transparent" className="w-1/2" to="/about"/>
                </div>
            </div>
        </>
    );
}
