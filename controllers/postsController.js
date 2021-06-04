import express from "express";
import asyncHandler from "express-async-handler";
import { validationResult } from "express-validator";

import User from "../models/userModel.js";
import Post from "../models/postModel.js";

// @desc    Creates new Post
// @route   POST /api/posts/wall
// @access  Private
const addPost = asyncHandler(async (req, res) => {
  const { user, text, name } = req.body;
  const user = await User.findById(req.user.id).select("-password");

  if (user) {
    const newPost = new Post({
      name: user.name,
      text: req.body.text,
      user: req.user._id,
    });
    const createdPost = await newPost.save();
    res.status(201).json(createdPost);
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// @desc    Fetch all posts
// @route   GET /api/posts
// @access  Private

export { addPost };
