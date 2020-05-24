const express = require("express");
const user = express.Router();
const Comments = require("../Models/Comments");

user.post("/comments", (req, res) => {
  let match = req.body.match;
  Comments.findOne({ match: match })
    .then((comments) => {
      if (comments) {
        res.send(comments.comments);
      } else {
        res.send("No Comments");
      }
    })
    .catch((err) => {
      res.send("Error fetching comments" + err);
    });
});
module.exports = user;
