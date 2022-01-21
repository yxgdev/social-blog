import axios from "axios";

// const url = "";

const API = axios.create({
  baseURL: "http://localhost:5000",
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.authorizaton = `Bearer ${JSON.parse(
      localStorage.getItem("profile").token
    )}`;
  }

  return req;
});

export const fetchPosts = () => API.get(`/blog-posts`);
export const createPost = (newPost) => API.post(`/blog-posts`, newPost);
export const deletePost = (id) => API.delete(`/blog-posts/${id}`);
export const updatePostViews = (id) =>
  API.patch(`/blog-posts/${id}/views`, { id });

export const getSinglePost = (id) => API.get(`/blog-posts/${id}`);

export const signIn = (formData) => API.post("/auth/signin", formData);
export const signUp = (formData) => API.post("/auth/signup");
