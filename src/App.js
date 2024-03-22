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
import AuthProvider from "./components/AuthContext";
import AdminPanel from "./components/pages/AdminPanel";
import { ProjectProvider } from "./components/ProjectsContext";
import EditProjectForm from "./components/EditProjectForm";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";
function App() {
    const location = useLocation();
    const isAdminRoute = location.pathname.includes("/admin");
    return (
        /* <div className="font-[MyFont]">
            <Sidenav />
        </div> */

        <div className=" mx-auto h-screen font-[MyFont]">
            {!isAdminRoute && <Header />}{" "}
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Main />{" "}
                            <ProjectProvider>
                                <Portfolio type="section" />
                            </ProjectProvider>
                        </>
                    }
                />
                <Route path="/about" element={<AboutMe />} />

                <Route
                    path="/portfolio"
                    element={
                        <ProjectProvider>
                            <Portfolio type="page" />
                        </ProjectProvider>
                    }
                />
                <Route
                    path="/projects/:projectId"
                    element={
                        <ProjectProvider>
                            <ProjectDetails />
                        </ProjectProvider>
                    }
                />
                <Route
                    path="/admin/projects/:projectId" //this is editing
                    element={
                        <AuthProvider>
                            <AdminPanel>
                                <ProjectProvider>
                                    <EditProjectForm />
                                </ProjectProvider>
                            </AdminPanel>
                        </AuthProvider>
                    }
                />
                <Route
                    path="/admin/projects/add"
                    element={
                        <AuthProvider>
                            <AdminPanel>
                                <ProjectForm />
                            </AdminPanel>
                        </AuthProvider>
                    }
                />

                <Route path="/contact" element={<Contact />} />

                <Route
                    path="/admin"
                    element={
                        <AuthProvider>
                            <ProjectProvider>
                                <AdminPanel>
                                    <ProjectList
                                        type="admin"
                                        itemsPerPage={9}
                                        className="flex flex-col w-full h-[85vh] justify-start "
                                        layout="admin"
                                    ></ProjectList>{" "}
                                </AdminPanel>
                            </ProjectProvider>
                        </AuthProvider>
                    }
                />
                <Route
                    path="/login"
                    element={
                        <AuthProvider>
                            <LoginForm />
                        </AuthProvider>
                    }
                />
            </Routes>
            {!isAdminRoute && <ContactSection />}{" "}
            {!isAdminRoute && <Footer></Footer>}
        </div>
    );
}

export default App;
