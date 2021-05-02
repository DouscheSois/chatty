import express from "express";
import asyncHandler from "express-async-handler";
import { validationResult } from "express-validator";

import User from "../models/userModel.js";
import Post from "../models/postModel.js";

// @desc    Creates new Post
// @route   POST /api/posts
// @access  Public
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
