const express = require("express");
const user = express.Router();
const Comments = require("../Models/Comments");
user.post("/delete", (req, res) => {
  let match = req.body.match;
  let id = req.body.id;
  Comments.collection.update(
    { "comments.match": match },
    {
      $pull: {
        comments: { _id: id },
      },
    }
  );
});
module.exports = user;
