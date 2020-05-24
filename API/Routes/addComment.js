const express = require("express");
const user = express.Router();
const Comments = require("../Models/Comments");
user.post("/comment", (req, res) => {
  let newDate = new Date(Date.now()).toLocaleString("en-GB");
  let commentData = {
    username: req.body.username,
    comment: req.body.comment,
    created: newDate,
  };
  let firstComment = {
    match: req.body.match,
    username: req.body.username,
    comment: req.body.comment,
    created: newDate,
  };
  let matchID = req.body.match;
  Comments.findOne({ match: matchID })
    .then((match) => {
      if (match) {
        match.comments.push(commentData);
        match.save();
        res.send("comment added");
      } else {
        Comments.create(firstComment)
          .then((match) => {
            match.comments.push(commentData);
            match.save();
            res.send("comment added");
          })
          .catch((err) => {
            res.send("Error occured" + err);
          });
      }
    })
    .catch((err) => {
      res.send("Error occured" + err);
    });
});
module.exports = user;
