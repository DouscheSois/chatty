import express from "express";
const router = express.Router();
import { newPost } from "../controllers/postsController.js";

import { protect } from "../middleware/authMiddleware.js";

router.route("/").get(protect);
