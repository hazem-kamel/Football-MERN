const express = require("express");
const connectDB = require("./Database/Database");
const bodyParser = require("body-parser");
const session = require("express-session");
const passport = require("passport");
const mongoose = require("mongoose");
const connectStore = require("connect-mongo");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
//Passport config
require("./API/Config/Passport")(passport);
connectDB();
//To extract json data from Client(post) requests and urlencoded with bodyparser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

const options = {
  allowedHeaders: [
    "Origin",
    "X-Requested-With",
    "Content-Type",
    "Authorization",
    "Accept",
    "X-Access-Token",
  ],
  credentials: true,
  methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
  origin: true,
};
app.use(cors(options));
//This makes it more difficult for users to see that we are using Express for security
app.disable("x-powered-by");
// Passport middleware
app.use(passport.initialize());
app.use(passport.session());
// Express session
const MongoStore = connectStore(session);
const SESS_NAME = "sid";
app.use(
  session({
    name: SESS_NAME,
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    maxAge: 1000 * 60 * 60 * 3, // 3 days
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      collection: "session",
      ttl: parseInt(1000 * 60 * 60 * 3) / 1000,
    }),
    cookie: {
      sameSite: true,
      secure: "development" === "production",
      maxAge: parseInt(1000 * 60 * 60 * 3),
    },
  })
);
// import  Routes
const userRegister = require("./API/Routes/UserRegisteration");
const userLogin = require("./API/Routes/UserLogin");
const comments = require("./API/Routes/addComment");
const fetchComments = require("./API/Routes/getComments");
const deleteComment = require("./API/Routes/deleteComment");

// To make server use the Routes
app.use("/api", userRegister);
app.use("/api", userLogin);
app.use("/api", comments);
app.use("/api", fetchComments);
//Server using env port or 6000
const PORT = process.env.PORT || 6000;
app.listen(PORT, () => console.log("Server Started on 6000"));
