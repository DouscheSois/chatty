const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");

const User = require("../models/User");
const Entry = require("../models/Entry");

// @Route POST /entry
// Private (Needs auth middleware)
// Creates a new main entry
router.post(
  "/",
  [auth, [check("text", "Text is required").not().isEmpty()]],
  async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ error: error.array() });
    }

    try {
      const user = await User.findById(req.user.id).select("-password");

      const newEntry = new Entry({
        name: user.name,
        text: req.body.text,
        user: req.user.id,
      });

      const entry = await newEntry.save();
      res.json(entry);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error with Creating a New Entry");
    }
  }
);

module.exports = router;
