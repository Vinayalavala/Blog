import React, { useEffect, useState } from "react";
import { fetchBlogs, deleteBlog } from "../api";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import "../styles/styles.css";

const Home = () => {
    const [blogs, setBlogs] = useState([]);

    // Fetch blogs when the component loads
    const loadBlogs = () => {
        fetchBlogs().then(setBlogs);
    };

    useEffect(() => {
        loadBlogs(); // Initial load
    }, []);

    // Handle Blog Deletion with Auto-Reload
    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this blog?");
        if (confirmDelete) {
            await deleteBlog(id);
            loadBlogs(); // Reload the blogs after deletion
        }
    };

    return (
        <div className="layout">
            <Sidebar />
            <div className="main-content">
                <h1 className="page-title">Latest Blogs</h1>
                <div className="blog-grid">
                    {blogs.length > 0 ? (
                        blogs.map((blog) => (
                            <div key={blog._id} className="blog-card">
                                <h2>{blog.title}</h2>
                                <p className="author">By {blog.author}</p>
                                <p className="excerpt">{blog.content.substring(0, 100)}...</p>
                                <div className="blog-actions">
                                    <Link to={`/view/${blog._id}`} className="btn view-btn">📖 Read</Link>
                                    <Link to={`/edit/${blog._id}`} className="btn edit-btn">✏️ Edit</Link>
                                    <button className="btn delete-btn" onClick={() => handleDelete(blog._id)}>🗑️ Delete</button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="no-blogs">No blogs available. Start by creating one!</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Home;
