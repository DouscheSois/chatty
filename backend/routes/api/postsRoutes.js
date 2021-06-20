// import express from "express";
// const router = express.Router();
// import { validationResult, check } from "express-validator";
// // import { createNewPost } from "../../controllers/postsController.js";
//
// import { protect } from "../../middleware/authMiddleware.js";
//
// router.post(
//   "/",
//   check("text", "Text is required").notEmpty(),
//   async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }
//
//     try {
//       const user = await User.findById(req.user.id).select("-password");
//
//       const newPost = new Post({
//         text: req.body.text,
//         name: user.name,
//         user: req.user.id,
//       });
//
//       const post = await newPost.save();
//
//       res.json(post);
//     } catch (err) {
//       console.error(err.message);
//       res.status(500).send("Server Error");
//     }
//   }
// );
//
// export default router;
