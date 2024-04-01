import React, { useEffect, useState } from "react";
import Input from "./Input";
import Button from "./Button";
import { json, useNavigate, useParams } from "react-router";
import { useProjectsContext } from "./ProjectHook";
import AuthenticatedComponent from "./AuthenticationHOC";
import axios from "axios";

const ProjectForm = ({ project }) => {
    const [title, setTitle] = useState("");
    const [label, setLabel] = useState("");
    const [imageLink, setImageLink] = useState("");
    const [tags, setTags] = useState("");
    const [content, setContent] = useState("");
    const [id, setId] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        if (project) {
            setTitle(project.title);
            setLabel(project.label);
            setImageLink(project.imageLink);
            setTags(project.tags);
            setContent(project.content);
            setId(project._id);
        }
    }, [project]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const projectJson = { title, label, imageLink, tags, content, id };
        console.log(projectJson)
        const componentType = project ? "edit" : "add";
        if (project) {
            axios
                .post("https://my-portfolio-expressjs.onrender.com/projects/"+componentType, { projectJson })
                .then((response) => {
                    if (response.status === 200) {
                        alert("Project updated successfully");
                    }
                });
        } else {
            axios
                .post("http://localhost:3001/projects/add", { projectJson })
                .then((response) => {
                    if (response.status === 200) {
                        alert("Project added successfully");
                    }
                });
        }

        // Handle form submission logic here
        // You can access the form values using the state variables (title, label, imageLink, keys, content)
    };
    const handleDelete = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/projects/delete", { id }).then((response) => {
            if (response.status === 200) {
                alert("Project deleted successfully");
                navigate("/admin");
            }
        });
    }

    return (
        <div className="flex flex-col w-full items-center">
            <form
                onSubmit={handleSubmit}
                className="flex items-center justify-center flex-col w-full px-4 h-1/2 my-auto gap-y-2"
            >
                <Input
                    type="text"
                    value={title}
                    placeholder="Title"
                    onChange={(e) => setTitle(e.target.value)}
                />

                <Input
                    type="text"
                    placeholder="Label"
                    value={label}
                    onChange={(e) => setLabel(e.target.value)}
                />

                <Input
                    type="text"
                    placeholder="Header Image Link"
                    value={imageLink}
                    onChange={(e) => setImageLink(e.target.value)}
                />

                <Input
                    type="text"
                    value={tags}
                    placeholder="Tags"
                    onChange={(e) => setTags(e.target.value)}
                />

                <textarea
                    id="content"
                    value={content}
                    placeholder="Write here..."
                    className="h-80 resize-none w-full border-gray-500 border-2 rounded-sm outline-none"
                    onChange={(e) => setContent(e.target.value)}
                ></textarea>
                <div className="flex mb-2 gap-x-1">
                    <button
                        type="submit"
                        className="bg-blue-600 p-2 rounded-sm"
                    >
                        Save
                    </button>
                    <Button
                        type="button"
                        text="Delete"
                        className="bg-red-600"
                        onClick={handleDelete}
                    />
                </div>
            </form>
        </div>
    );
};

export default ProjectForm;
