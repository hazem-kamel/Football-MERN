const mongoose = require("mongoose");

const URI =
  "mongodb+srv://Football:Database_football@cluster0-3dqko.mongodb.net/test?retryWrites=true&w=majority";

const connectDB = async () => {
  //mongoose package to deal with the DB
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log("Database Connected...");
};
module.exports = connectDB;
