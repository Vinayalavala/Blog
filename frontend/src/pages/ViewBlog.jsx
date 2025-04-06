import React, { useEffect, useState } from "react";
import { getBlogById } from "../api";
import { useParams, useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import "../styles/styles.css";

const ViewBlog = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        getBlogById(id).then(setBlog);
    }, [id]);

    // Function to Convert Newlines to HTML Paragraphs
    const formatContent = (content) => {
        return content
            ? content.split("\n").map((paragraph, index) => `<p key=${index}>${paragraph}</p>`).join("")
            : "";
    };

    return (
        <div className="layout">
            <Sidebar />
            <div className="main-content">
                {blog ? (
                    <div className="blog-read-container">
                        <h1 className="blog-read-title">{blog.title}</h1>
                        <p className="blog-read-author">By <strong>{blog.author}</strong></p>
                        {/* ✅ Correctly Render Paragraphs */}
                        <div className="blog-read-content" dangerouslySetInnerHTML={{ __html: formatContent(blog.content) }} />
                        <button className="back-btn" onClick={() => navigate("/")}>⬅️ Back to Blogs</button>
                    </div>
                ) : (
                    <p className="loading-text">Loading...</p>
                )}
            </div>
        </div>
    );
};

export default ViewBlog;
