const mongoose = require("mongoose");
const config = require("config");

const db = config.get("MongoURI");

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(db, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log("MongoDB is connected..success!");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectToMongoDB;
