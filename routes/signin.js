const path = require("path");
const express = require("express");
const routersignin = express.Router();

routersignin.get("/signin.html", (req, res, next) => {
  // console.log(req.body);
  res.sendFile(path.join(__dirname, "..", "views", "signin.html"));
});
routersignin.post("/signin", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});
module.exports = routersignin;
