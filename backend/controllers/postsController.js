import express from "express";
import asyncHandler from "express-async-handler";
import { validationResult } from "express-validator";

import User from "../models/userModel.js";
import Post from "../models/postModel.js";

// @desc    Creates new Post
// @route   POST /api/posts
// @access  Private
const createNewPost = asyncHandler(async (req, res) => {
  const { name, text } = req.body;

  const user = await User.findById(req.user.id).select("-password");

  if (!user) {
    res.status(400);
    throw new Error("User not defined");
  }

  const post = new Post({
    name,
    text,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      text: user.text,
      name: user.name,
    });
  } else {
    res.status(400);
    throw new Error("Error with creating new post");
  }

  // try {
  //   const user = await User.findById(req.user.id).select("-password");
  //
  //   const newPost = new Post({
  //     text: req.body.text,
  //     name: user.name,
  //     user: req.user.id,
  //   });
  //
  //   const post = await newPost.save();
  //
  //   res.json(post);
  // } catch (err) {
  //   console.error(err.message);
  //   res.status(500).send("Server Error");
  // }
});

// @desc    Fetch all posts
// @route   GET /api/posts
// @access  Private

export { createNewPost };
