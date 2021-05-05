import express from "express";
import asyncHandler from "express-async-handler";
import { validationResult } from "express-validator";

import User from "../models/userModel.js";
import Post from "../models/postModel.js";

// @desc    Creates new Post
// @route   POST /api/posts
// @access  Private
const addPost = asyncHandler(async (req, res) => {
  const error = validationResult(req);

  if (!error.isEmpty()) {
    return res.status(400).json({ error: error.array() });
  }

  try {
    const user = await User.findById(req.user.id).select("-password");

    const newPost = new Post({
      name: user.name,
      text: req.body.text,
      user: req.user.id,
    });

    const post = await newPost.save();
    res.json(post);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error with Creating a New Post");
  }
});

export { addPost };

// @desc    Fetch all posts
// @route   GET /api/posts
// @access  Private

const getPosts = asyncHandler(async (req, res) => {
  const pageSize = 10;
  const page = Number(req.query.pageNumber) || 1;

  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: "i",
        },
      }
    : {};

  const count = await Post.countDocuments({ ...keyword });
  const posts = await Post.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1));

  res.json({ posts, page, pages: Math.ceil(count / pageSize) });
});
