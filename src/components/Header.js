import Logo from "../resources/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
function Header() {
    const [sideNavVisible, setSideNavVisible] = useState(false);

    return (
        <header
            className="flex items-center justify-between fixed w-full 
        px-6 py-4 top-0 bg-[#10294C] z-10"
        >
            <h1 className="text-white text-4xl">
                <abbr title="EMIRHAN KARTAL" className="no-underline">
                    <Link to="/">EMIRHAN K.</Link>
                </abbr>
            </h1>
            <button
                className="bg-menu-icon h-11 w-11 bg-cover ml-auto lg:hidden"
                onClick={() => setSideNavVisible(true)}
            ></button>
            <nav
                className={
                    (sideNavVisible && "w-[200px] ") +
                    " h-full fixed z-10 w-0 top-0 right-0 " +
                    ` transition-[width] duration-500 overflow-x-hidden pt-[60px] 
                    lg:w-auto lg:h-auto lg:pt-0 bg-white lg:bg-[#10294C] lg:min-w-[300px] lg:right-auto lg:static`
                }
            >
                <ul className="flex ml-4 gap-x-6 items-center flex-col lg:flex-row overflow-hidden">
                    <li
                        className="mr-40 text-2xl cursor-pointer text-black block lg:hidden "
                        onClick={() => setSideNavVisible(false)}
                    >
                        X
                    </li>
                    <Link
                        to="/"
                        className="nav-btn "
                        onClick={() => setSideNavVisible(false)}
                    >
                        Home
                    </Link>
                    <Link
                        to="/about"
                        className="nav-btn"
                        onClick={() => setSideNavVisible(false)}
                    >
                        About
                    </Link>
                    <Link
                        to="/portfolio"
                        className="nav-btn"
                        onClick={() => setSideNavVisible(false)}
                    >
                        Portfolio
                    </Link>
                    <Link
                        to="/contact"
                        className="nav-btn"
                        onClick={() => setSideNavVisible(false)}
                    >
                        Contact
                    </Link>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
