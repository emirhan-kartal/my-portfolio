import React, { useState } from "react";
import Input from "../Input";
import Button from "../Button";
import HeaderTitle from "../HeaderTitle";
import { useController, useForm } from "react-hook-form";
const Contact = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isDirty, dirtyFields },
    } = useForm();
    console.log(errors);
    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <>
            <HeaderTitle title="Contact me" />
            <section className=" min-h-[500px] p-7 w-10/12 mx-auto my-20 border-2 border-gray-300 rounded-sm shadow-lg lg:w-1/2">
                <div className="h-10/12 w-11/12 mx-auto">
                    <h2 className="text-4xl mb-7">Message</h2>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="flex flex-col items-center gap-y-4"
                    >
                        <Input
                            label="name"
                            placeholder="Name"
                            type="text"
                            {...register("name", { required: true })}
                            error={errors.name && dirtyFields.name}
                        />

                        <Input
                            label="email"
                            placeholder="Email"
                            type="email"
                            {...register("email", { required: true })}
                            error={errors.email && dirtyFields.email}
                        />
                        <Input
                            label="title"
                            placeholder="Title"
                            type="text"
                            
                            {...register("title", { required: true })}
                            error={errors.title && dirtyFields.title}
                        />
                        <textarea
                            label="message"
                            placeholder="Message"
                            className={"h-40 resize-none w-full border-gray-200 border-2 rounded-sm p-2 " + (errors.message && dirtyFields.message && " border-red-500")}
                            {...register("message", { required: true })}
                            isValid={errors.message}
                        />
                        <button type="submit">Press</button>
                        <Button
                            type="submit"
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
