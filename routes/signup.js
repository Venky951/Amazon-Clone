const path = require("path");
const express = require("express");
const routersignup = express.Router();

routersignup.get("/signup.html", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "views", "signup.html"));
});

routersignup.post("/signup", (req, res, next) => {
  console.log(req.body);
  res.sendFile(path.join(__dirname, "..", "views", "index.html"));
});

module.exports = routersignup;
