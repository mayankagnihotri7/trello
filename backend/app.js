var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
// var indexRouter = require("./routes/index");
var usersRouter = require('./routes/users');
let cors = require("cors");

require("dotenv").config();

var app = express();

// Connect to db
mongoose.connect(
  "mongodb://localhost/trello",
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
  (error) => {
    console.log("Connected:", error ? false : true);
  }
);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

// app.use("/", indexRouter);
app.use("/api/users", usersRouter);

module.exports = app;
