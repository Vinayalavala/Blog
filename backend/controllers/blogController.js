import Blog from "../models/Blog.js";

export const createBlog = async (req, res) => {
    try {
        const { title, content, author } = req.body;
        const blog = await Blog.create({ title, content, author });
        res.status(201).json(blog);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getBlogs = async (req, res) => {
    const blogs = await Blog.find();
    res.json(blogs);
};

export const getBlogById = async (req, res) => {
    const blog = await Blog.findById(req.params.id);
    blog ? res.json(blog) : res.status(404).json({ message: "Blog not found" });
};

export const updateBlog = async (req, res) => {
    const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
    blog ? res.json(blog) : res.status(404).json({ message: "Blog not found" });
};

export const deleteBlog = async (req, res) => {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    blog ? res.json({ message: "Blog deleted" }) : res.status(404).json({ message: "Blog not found" });
};
