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

export { createPost, getPosts };
