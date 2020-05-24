const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");

// import User Model
const User = require("../Models/UserRegisteration");

module.exports = function(passport) {
  passport.use(
    new LocalStrategy({ username: "email" }, (email, password, done) => {
      //match user "Email" if available in DB
      User.findOne({ email: email })
        .then(user => {
          if (!user) {
            return done(null, false, {
              message: "That Email is not registered !"
            });
          }
          {
            //match the password
            bcrypt.compare(password, user.password, (err, isMatch) => {
              if (err) throw err;
              if (isMatch) {
                return done(null, user);
              } else {
                return done(null, false, {
                  message: "The password you entered is incorrect"
                });
              }
            });
          }
        })
        .catch(err => console.log(err));
    })
  );
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });
};
