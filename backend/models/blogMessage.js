import mongoose from "mongoose";

const blogPostsSchema = mongoose.Schema({
  title: String,
  content: String,
  selectedFile: String,
  author: String,
  views: Number,
  createdAt: {
    type: Date,
    required: true,
  },
});

const blogPost = mongoose.model("blog", blogPostsSchema);

export default blogPost;
