import blogPost from "../models/blogMessage.js";

export const getBlogPosts = (req, res) => {
  res.status(200).json({ message: "hi" });
};

export const createBlogPosts = async (req, res) => {
  const newBlog = new blogPost({
    title: "great stuffs",
    content: "some content",
    author: "god",
    createdAt: Date.now(),
    selectedFile: "some base 64 stuffs",
  });
  await newBlog.save();
  res.status(200).json({ message: "done" });
};
