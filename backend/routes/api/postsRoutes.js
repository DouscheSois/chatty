import express from "express";
const router = express.Router();

import { createPost } from "../../controllers/postsController.js";

router.route("/").post(createPost);

export default router;
