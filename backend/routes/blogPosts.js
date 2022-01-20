// const express = require("express");
import express from "express";
import {
  createBlogPosts,
  deletePost,
  getBlogPosts,
  getSinglePost,
  updatePostViews,
} from "../controllers/blogPosts.js";

const router = express.Router();

router.get("/", getBlogPosts);
router.post("/", createBlogPosts);
router.delete("/:id", deletePost);
router.patch("/:id/views", updatePostViews);
router.get("/:id", getSinglePost);

export default router;
