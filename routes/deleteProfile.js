const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

const Entry = require("../models/Entry");
const User = require("../models/User");

//@Route DELETE /profile
// Private (Needs auth middleware)
// Deletes the user along with the users entries.
router.delete("/", auth, async (req, res) => {
  try {
    //Remove entries
    await Entry.deleteMany({ user: req.user.id });
    //Remove User
    await User.findOneAndRemove({ _id: req.user.id });

    res.json({ msg: "User deleted" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error with deleting the user");
  }
});

module.exports = router;
