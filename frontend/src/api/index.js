import axios from "axios";

const url = "http://localhost:5000";

export const fetchPosts = () => axios.get(`${url}/blog-posts`);
export const createPost = (newPost) => axios.post(`${url}/blog-posts`, newPost);
export const deletePost = (id) => axios.delete(`${url}/blog-posts/${id}`);
