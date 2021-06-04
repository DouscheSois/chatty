import express from "express";
const router = express.Router();
import { addPost } from "../controllers/postsController.js";

import { protect } from "../middleware/authMiddleware.js";

router.route("/").get(protect);
router.post("/wall", addPost);

// router.route("/wall").post(addPost).get(protect);

export default router;
