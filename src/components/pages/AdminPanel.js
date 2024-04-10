import React, { useState } from "react";


import {
    faInbox,
    faChartLine,
    faWallet,
    faCartShopping,
    faUser,
    faFolderOpen,
    faGear,
    faIdCardClip,
    faRightFromBracket,
    faNewspaper,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../Button";
import AuthenticatedComponent from "../AuthenticationHOC";
import withAuth from "../AuthenticationHOC";

const AdminPanel = ({ children }) => {
    const [chosenButton] = useState();
    return (
        <div className="flex">
            <section
                className="sidenav text-good-gray bg-blue-600 flex flex-col 
         items-center md:items-start w-[70px] md:w-48 min-h-screen border-good-gray border-2 rounded-lg justify-end"
            >
                <h1 className="hidden md:block text-xl mb-auto w-auto ">
                    Admin Panel
                </h1>
                <h3 className="text-xs font-semibold">ANALYTICS</h3>
                <ul className="ml-2 w-full md:m-0">
                    <li>
                        <Button
                            type="admin-icon"
                            icon={faNewspaper}
                            text="Projects"
                            to="/admin"

                        />
                    </li>
                    <li>
                        <Button
                            type="admin-icon"
                            icon={faChartLine}
                            text="Blogs"
                            to ="/admin/blog/"
                            chosenButton={chosenButton}
                        />
                    </li>
                    <li>
                        <Button type="admin-icon" icon={faWallet} text="" />
                    </li>
                    <li>
                        <Button
                            type="admin-icon"
                            icon={faCartShopping}
                            text=""
                        />
                    </li>
                    <li></li>
                </ul>
                <h3 className="text-xs font-semibold">NOTIF.</h3>
                <ul className="ml-2 mt-2 w-full md:m-0">
                    <li>
                        <Button type="admin-icon" icon={faUser} text="" />
                    </li>
                    <li>
                        <Button type="admin-icon" icon={faInbox} text="" />
                    </li>
                    <li>
                        <Button type="admin-icon" icon={faWallet} text="" />
                    </li>
                    <li>
                        <Button
                            type="admin-icon"
                            icon={faCartShopping}
                            text=""
                        />
                    </li>
                    <li>
                        <Button type="admin-icon" icon={faFolderOpen} text="" />
                    </li>
                    <li>
                        <Button type="admin-icon" icon={faGear} text="" />
                    </li>
                </ul>
                <Button
                    type="admin-icon"
                    className="w-full"
                    icon={faIdCardClip}
                    text="Profile"
                />
                <Button
                    type="admin-icon"
                    icon={faRightFromBracket}
                    text="Log out"
                />
            </section>
            {children}
        </div>
    );
};

export default withAuth(AdminPanel);
