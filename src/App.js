import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/pages/Main";
import ContactSection from "./components/pages/ContactSection";
import Portfolio from "./components/pages/Portfolio";
import { Routes, Route, useLocation } from "react-router";
import AboutMe from "./components/pages/AboutMe";
import Contact from "./components/pages/Contact";
import ProjectDetails from "./components/pages/ProjectDetails";
import LoginForm from "./components/LoginForm";
import AdminPanel from "./components/pages/AdminPanel";
import EditProjectForm from "./components/EditProjectForm";

import { ProjectForm, ProjectList } from "./components";

function App() {
    const location = useLocation();
    const isAdminRoute = location.pathname.includes("/admin");

    return (
        /* <div className="font-[MyFont]">
            <Sidenav />
        </div> */

        <div className=" mx-auto h-screen font-[MyFont]">
            {!isAdminRoute ? <Header /> : undefined}
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Main />

                            <Portfolio type="section" />
                        </>
                    }
                />
                <Route path="/about" element={<AboutMe />} />

                <Route path="/portfolio" element={<Portfolio type="page" />} />
                <Route
                    path="/projects/:projectId"
                    element={<ProjectDetails />}
                />
                <Route
                    path="/admin/projects/:projectId" //this is editing
                    element={
                        <AdminPanel>
                            <EditProjectForm />
                        </AdminPanel>
                    }
                />
                <Route
                    path="/admin/projects/add"
                    element={
                        <AdminPanel>
                            <ProjectForm />
                        </AdminPanel>
                    }
                />

                <Route path="/contact" element={<Contact />} />

                <Route
                    path="/admin"
                    element={
                        <AdminPanel>
                            <ProjectList
                                type="admin"
                                itemsPerPage={9}
                                className="flex flex-col w-full h-[85vh] justify-start "
                                layout="admin"
                            ></ProjectList>{" "}
                        </AdminPanel>
                    }
                />
                <Route path="/login" element={<LoginForm />} />
            </Routes>
            {!isAdminRoute && <ContactSection />}{" "}
            {!isAdminRoute && <Footer></Footer>}
        </div>
    );
}

export default App;
