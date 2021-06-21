import express from "express";
const router = express.Router();

import { createPost, getPosts } from "../../controllers/postsController.js";
import { protect } from "../../middleware/authMiddleware.js";

router.route("/").get(getPosts).post(protect, createPost);

export default router;
