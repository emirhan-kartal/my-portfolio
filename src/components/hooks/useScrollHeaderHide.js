import { useEffect, useRef } from "react";

export default function useScrollHeaderHide() {
    const ref = useRef();
    useEffect(() => {
        let lastScroll = 0;
        console.log("useScrollHeaderHide");
        const handleScroll = () => {
            const currentScroll = window.scrollY;
            console.log(currentScroll);

            if (currentScroll > lastScroll) {
                ref.current.style.top = "-100px";
            } else {
                ref.current.style.top = "0";
            }
            lastScroll = currentScroll;
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return ref;
}
