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
  try {
    const { id } = req.params;
    await blogPost.findByIdAndDelete(id);

    res.status(200).json({ message: "deleted" });
  } catch (error) {
    console.log(error);
  }
};

export const updatePostViews = async (req, res) => {
  try {
    const { id } = req.body;

    const updatedPost = await blogPost.findByIdAndUpdate(
      id,
      {
        $inc: { views: 1 },
      },
      { new: true }
    );
    res.status(200).json({ post: updatedPost });
  } catch (error) {
    console.log("updatePostviews controller");
  }
};

export const getSinglePost = async (req, res) => {
  try {
    const { id } = req.params;

    const post = await blogPost.findById(id);

    res.status(200).json(post);
  } catch (error) {
    console.log("getSinglePosts error");
  }
};
