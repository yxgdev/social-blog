import blogPost from "../models/blogMessage.js";

export const getBlogPosts = async (req, res) => {
  const data = await blogPost.find();

  res.status(200).json(data);
};

export const createBlogPosts = async (req, res) => {
  console.log(req.body);
  const { data } = req.body;
  console.log(data);
  // const newBlog = new blogPost({
  //   title: "great stuffs",
  //   content: "some content",
  //   author: "god",
  //   createdAt: Date.now(),
  //   selectedFile: "some base 64 stuffs",
  // });
  res.status(200).json({ message: "done" });
};
