// const express = require("express");
import express from "express";
import {
  createBlogPosts,
  deletePost,
  getBlogPosts,
} from "../controllers/blogPosts.js";

const router = express.Router();

router.get("/", getBlogPosts);
router.post("/", createBlogPosts);
router.delete("/:id", deletePost);
export default router;
