const express = require("express");
const connectToMongoDB = require("./config/db");

connectToMongoDB();

const app = express();

// to be able to use req.body middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("API is Online"));
app.use("/registration", require("./routes/registration"));
app.use("/login", require("./routes/login"));
app.use("/entry", require("./routes/entry"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Running on Port ${PORT}`));
