import React, { useState } from "react";
import Input from "../Input";
import Button from "../Button";
import HeaderTitle from "../HeaderTitle";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    return (
        <>
            <HeaderTitle title="Contact me" />
            <section className=" min-h-[500px] p-7 w-10/12 mx-auto my-20 border-2 border-gray-300 rounded-sm shadow-lg lg:w-1/2">
                <div className="h-10/12 w-11/12 mx-auto">
                    <h2 className="text-4xl mb-7">Message</h2>
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col items-center gap-y-4"
                    >
                        <Input
                            label="name"
                            placeholder="Name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <Input
                            label="email"
                            placeholder="Email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <textarea
                            label="message"
                            placeholder="Message"
                            value={message}
                            className="h-40 resize-none w-full border-gray-200 border-2 rounded-sm"
                            onChange={(e) => setMessage(e.target.value)}
                        />

                        <Button
                            type="red"
                            text="Send"
                            className="!w-3/4 text-white ml-auto"
                        />
                    </form>

                </div>

            </section>
        </>
    );
};

export default Contact;
