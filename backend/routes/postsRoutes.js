import express from "express";
const router = express.Router();
import { createNewPost } from "../controllers/postsController.js";

import { protect } from "../middleware/authMiddleware.js";

router.route("/wall").post(createNewPost).get(protect);

export default router;
