import axios from "axios";

const url = "http://localhost:5000";

export const fetchPosts = () => axios.get(`${url}/blog-posts`);
export const createPost = () => axios.post(`${url}/blog-posts`);
