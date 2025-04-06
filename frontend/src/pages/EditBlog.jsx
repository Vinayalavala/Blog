import React, { useState, useEffect } from "react";
import { getBlogById, updateBlog } from "../api";
import { useParams, useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import "../styles/styles.css";

const EditBlog = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [form, setForm] = useState({ title: "", content: "", author: "" });

    useEffect(() => {
        getBlogById(id).then(setForm);
    }, [id]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateBlog(id, form);
        navigate("/");
    };

    return (
        <div className="layout">
            <Sidebar />
            <div className="main-content">
                <h1 className="page-title">✏️ Edit Your Blog</h1>
                <div className="edit-form-container">
                    <form className="blog-form" onSubmit={handleSubmit}>
                        <label className="input-label">Title</label>
                        <input
                            name="title"
                            placeholder="Blog Title"
                            value={form.title}
                            onChange={handleChange}
                            required
                            className="input-field"
                        />
                        <label className="input-label">Author</label>
                        <input
                            name="author"
                            placeholder="Author Name"
                            value={form.author}
                            onChange={handleChange}
                            required
                            className="input-field"
                        />
                        <label className="input-label">Content</label>
                        <textarea
                            name="content"
                            placeholder="Edit your blog content here..."
                            value={form.content}
                            onChange={handleChange}
                            required
                            className="input-field textarea"
                        />
                        <button type="submit" className="save-btn">💾 Save Changes</button>
                        <button type="button" className="back-btn" onClick={() => navigate("/")}>⬅️ Cancel</button>
                    </form>

                    {/* 📌 Live Preview of Blog */}
                    <div className="preview-container">
                        <h2 className="preview-title">{form.title || "Live Preview Title"}</h2>
                        <p className="preview-author">By {form.author || "Author Name"}</p>
                        <p className="preview-content">{form.content || "Your blog content will appear here as you type..."}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditBlog;
