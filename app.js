const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const proxy = require("http-proxy-middleware");

require("dotenv").config();

var galleryRouter = require("./routes/galleryRoute");

//To be added
const MONGODB_URI = process.env.MONGODB_KEY;

const app = express();
app.use(cors());

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/uploads", express.static("uploads"));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/gallery", galleryRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));
}

app.use(bodyParser.urlencoded({ extended: false }));

// module.exports = function (app) {
//   // add other server routes to path array
//   app.use(proxy(["/gallery"], { target: "http://localhost:5000" }));
// };

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true })
  .then((result) => {
    console.log("Connected To Database");
  })
  .catch((err) => {
    console.log(err);
  });

// Right before your app.listen(), add this:
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

module.exports = app;
