const express = require("express");
const users = express.Router();
const cors = require("cors");
const bcrypt = require("bcryptjs");
const sessionizeUser = require("../Session/Session");
const User = require("../Models/UserRegisteration");

users.use(cors());

users.post("/register", (req, res) => {
  const Today = new Date();
  let userData = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    gender: req.body.gender,
    created: Today
  });
  User.findOne({ username: req.body.username }).then(jk => {
    if (jk) {
      res.json({ error: "User with the same username already Exists!" });
    }
  });
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      res.json({ error: "User with the same email already Exists!" });
    }
  });
  bcrypt.hash(req.body.password, 10, (err, hash) => {
    userData.password = hash;
    const sessionUser = sessionizeUser(userData);

    User.create(userData)
      .then(user => {
        req.session.user = sessionUser;
        res.send(req.session);
      })
      .catch(err => {
        res.send("error" + err);
      });
  });
});
module.exports = users;
