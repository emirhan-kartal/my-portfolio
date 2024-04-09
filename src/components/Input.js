import React, { forwardRef } from "react";

const Input = forwardRef(
    (
        {
            label,
            value,
            onChange,
            className,
            placeholder,
            type = "text",
            error,
            ...props
        },
        ref
    ) => {
        return (
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={
                    "w-full border-gray-200 border-2 rounded-sm p-2 " +
                    (error && " border-red-500 ") +
                    className
                }
                ref={ref}
                {...props}
            />
        );
    }
);

export default Input;
