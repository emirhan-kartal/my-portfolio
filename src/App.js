import "./App.css";
import {
    Header,
    Footer,
    Main,
    ContactSection,
    Portfolio,
    AboutMe,
    Contact,
    ProjectDetails,
    LoginForm,
    AdminPanel,
    EditContentForm,
} from "./components/index";
import { Routes, Route, useLocation } from "react-router";

import { ContentForm, ProjectList } from "./components";

function App() {
    const location = useLocation();
    const isAdminRoute = location.pathname.includes("/admin");

    return (


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
                            <EditContentForm />
                        </AdminPanel>
                    }
                />
                <Route
                    path="/admin/:contentType/add"
                    element={
                        <AdminPanel>
                            <ContentForm />
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
