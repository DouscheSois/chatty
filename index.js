const express = require("express");
const connectToMongoDB = require("./config/db");
const path = require("path");

connectToMongoDB();

const app = express();

// to be able to use req.body middleware
app.use(express.json({ extended: false }));

app.use("/registration", require("./routes/registration"));
app.use("/login", require("./routes/login"));
app.use("/entry", require("./routes/entry"));
app.use("/profile", require("./routes/deleteProfile"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Running on Port ${PORT}`));
