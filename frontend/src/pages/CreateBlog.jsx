import React, { useState } from "react";
import { createBlog } from "../api";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import "../styles/styles.css";

const CreateBlog = () => {
    const [form, setForm] = useState({ title: "", content: "", author: "" });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createBlog(form);
        navigate("/");
    };

    return (
        <div className="layout">
            <Sidebar />
            <div className="main-content">
                <h1 className="page-title">📝 Create a New Blog</h1>
                <div className="form-container">
                    <form className="blog-form" onSubmit={handleSubmit}>
                        <input
                            name="title"
                            placeholder="Blog Title"
                            onChange={handleChange}
                            required
                            className="input-field"
                        />
                        <input
                            name="author"
                            placeholder="Author Name"
                            onChange={handleChange}
                            required
                            className="input-field"
                        />
                        <textarea
                            name="content"
                            placeholder="Write your blog content here..."
                            onChange={handleChange}
                            required
                            className="input-field textarea"
                        />
                        <button type="submit" className="submit-btn">🚀 Publish Blog</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateBlog;
