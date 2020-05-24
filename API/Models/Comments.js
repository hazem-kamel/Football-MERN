const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const commentsSchema = new Schema({
  match: {
    type: String,
    required: true,
  },
  comments: [
    {
      username: {
        type: String,
        required: true,
      },
      comment: {
        type: String,
      },
      created: {
        type: String,
      },
    },
  ],
});
var Comment = mongoose.model("Comment", commentsSchema);
module.exports = Comment;
