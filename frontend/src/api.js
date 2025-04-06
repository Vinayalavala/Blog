import axios from "axios";

const API_URL = "http://localhost:5001/api/blogs";

export const fetchBlogs = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const getBlogById = async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
};

export const createBlog = async (blog) => {
    const response = await axios.post(API_URL, blog);
    return response.data;
};

export const updateBlog = async (id, blog) => {
    const response = await axios.put(`${API_URL}/${id}`, blog);
    return response.data;
};

export const deleteBlog = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
};

