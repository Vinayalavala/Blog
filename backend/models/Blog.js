import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    text: String,
    author: String,
    createdAt: { type: Date, default: Date.now },
});

const blogSchema = new mongoose.Schema({
    title: String,
    content: String,
    author: String,
    comments: [commentSchema], // 📌 Ensure comments are included
});

const Blog = mongoose.model("Blog", blogSchema);
export default Blog;
