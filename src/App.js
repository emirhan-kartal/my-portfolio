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
    Blog,
} from "./components/index";
import { Routes, Route, useLocation } from "react-router";

import { ContentForm, ProjectList } from "./components";
import BlogCard from "./components/BlogCard";
import BlogList from "./components/BlogList";

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
                    path="/blog/"
                    element={
                        <Blog>
                            <BlogCard />
                        </Blog>
                    }
                ></Route>
                <Route
                    path="/admin/:contentType/:projectId" //this is editing
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
                            />
                        </AdminPanel>
                    }
                />
                <Route
                    path="/admin/blog"
                    element={
                        <AdminPanel>
                            <BlogList
                                type="admin"
                                itemsPerPage={9}
                                className={
                                    "flex flex-col w-full h-[85vh] justify-center"
                                }
                                layout="admin"
                            />
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
