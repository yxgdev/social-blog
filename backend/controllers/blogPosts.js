import blogPost from "../models/blogMessage.js";

export const getBlogPosts = async (req, res) => {
  const data = await blogPost.find();

  res.status(200).json(data);
};

export const createBlogPosts = async (req, res) => {
  const newPost = req.body;
  const newBlogPost = new blogPost(newPost);

  const newlyCreatedPost = await newBlogPost.save();
  res.status(200).json({ post: newlyCreatedPost });
};

export const deletePost = async (req, res) => {
  const id = req.body;
  console.log(id);
  await blogPost.findByIdAndDelete(id);

  res.status(200).json({ message: "deleted" });
};
