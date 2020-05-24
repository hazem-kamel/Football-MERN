const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 3,
    maxlength: 20
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: 5,
    maxlength: 20
  },
  password: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  created: { type: Date, default: Date.now }
});

var User = mongoose.model("User", userSchema);
module.exports = User;
