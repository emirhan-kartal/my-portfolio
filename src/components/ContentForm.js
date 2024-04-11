import React, { useEffect, useReducer, useState } from "react";
import Input from "./Input";
import Button from "./Button";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import projectFormReducer from "./reducers/contentFormReducer";
const ContentForm = ({ project }) => {
    const { contentType } = useParams();

    const [state, dispatch] = useReducer(projectFormReducer, {
        title: "",
        label: "",
        imageLink: "",
        tags: "",
        content: "",
        id: "",
    });

    const navigate = useNavigate();

    useEffect(() => {
        if (project) {
            dispatch({
                type: "SET_TITLE",
                title: project.title,
            });
            dispatch({
                type: "SET_LABEL",
                label: project.label,
            });
            dispatch({
                type: "SET_TAGS",
                tags: project.tags,
            });
            dispatch({
                type: "SET_IMAGE_LINK",
                image_link: project.imageLink,
            });
            dispatch({
                type: "SET_CONTENT",
                content: project.content,
            });
            dispatch({
                type: "SET_ID",
                id: project._id,
            });
        }
    }, [project]);
    console.log(contentType !== "projects" || contentType !== "blogs")
    if (contentType !== "projects" && contentType !== "blogs") {
        return <div>Error: Invalid content type.</div>;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const { title, label, imageLink, tags, content, id } = state;
        const projectJson = { title, label, imageLink, tags, content, id };
        console.log(projectJson);
        const componentType = project ? "edit" : "add";
        if (project) {
            axios
                .post(
                    `"https://my-portfolio-expressjs.onrender.com/${contentType}/" +/** */
                        componentType`,
                    { projectJson }
                )
                .then((response) => {
                    if (response.status === 200) {
                        alert("Project updated successfully");
                    }
                });
        } else {
            axios
                .post(
                    `https://my-portfolio-expressjs.onrender.com/${contentType}/add`,
                    { projectJson }
                )
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
        axios
            .post(
                "https://my-portfolio-expressjs.onrender.com/projects/delete",
                { id: state.id }
            )
            .then((response) => {
                if (response.status === 200) {
                    alert("Project deleted successfully");
                    navigate("/admin");
                }
            });
    };

    return (
        <div className="flex flex-col w-full items-center">
            <form
                onSubmit={handleSubmit}
                className="flex items-center justify-center flex-col w-full px-4 min-h-1/2 my-auto gap-y-2"
            >
                <Input
                    type="text"
                    value={state.title}
                    placeholder="Title"
                    onChange={(e) =>
                        dispatch({ type: "SET_TITLE", content: e.target.value })
                    }
                />

                <Input
                    type="text"
                    placeholder="Label"
                    value={state.label}
                    onChange={(e) =>
                        dispatch({ type: "SET_LABEL", content: e.target.value })
                    }
                />

                <Input
                    type="text"
                    placeholder="Header Image Link"
                    value={state.imageLink}
                    onChange={(e) =>
                        dispatch({
                            type: "SET_IMAGE_LINK",
                            content: e.target.value,
                        })
                    }
                />

                <Input
                    type="text"
                    value={state.tags}
                    placeholder="Tags"
                    onChange={(e) =>
                        dispatch({ type: "SET_TAGS", content: e.target.value })
                    }
                />

                <textarea
                    id="content"
                    value={state.content}
                    placeholder="Write here..."
                    className="h-80 resize-none w-full border-gray-500 border-2 rounded-sm outline-none"
                    onChange={(e) =>
                        dispatch({
                            type: "SET_CONTENT",
                            content: e.target.value,
                        })
                    }
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

export default ContentForm;
