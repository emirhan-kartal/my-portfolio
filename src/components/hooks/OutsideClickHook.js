import { useEffect, useRef } from "react";

const useClickOutside = (callback, state) => {
    const ref = useRef();

    useEffect(() => {
        const handleClick = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                callback();
            }
        };
        if (state) {
            document.addEventListener("click", handleClick);
        } else {
            document.removeEventListener("click", handleClick);
        }
        return () => {
            document.removeEventListener("click", handleClick);
        };
    }, [state]);
    return ref;
};

export default useClickOutside;
