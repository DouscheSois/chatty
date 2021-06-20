import asyncHandler from "express-async-handler";
import { validationResult } from "express-validator";

import Post from "../models/postModel.js";
import User from "../models/userModel.js";

const createPost = asyncHandler(async (req, res) => {
  const newPost = new Post({
    text: req.body.text,
  });

  const createdPost = await newPost.save();
  res.status(201).json(createdPost);
});

export { createPost };
