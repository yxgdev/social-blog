// const express = require("express");
import express from "express";
import { createBlogPosts, getBlogPosts } from "../controllers/blogPosts.js";

const router = express.Router();

router.get("/", createBlogPosts);
router.post("/", createBlogPosts);
export default router;
