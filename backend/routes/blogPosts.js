// const express = require("express");
import express from "express";
import {
  createBlogPosts,
  deletePost,
  getBlogPosts,
  updatePostViews,
} from "../controllers/blogPosts.js";

const router = express.Router();

router.get("/", getBlogPosts);
router.post("/", createBlogPosts);
router.delete("/:id", deletePost);
router.patch("/:id/views", updatePostViews);
export default router;
