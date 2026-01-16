const path = require("path");

const express = require("express");
const cartrouter = express.Router();

function isAuth(req, res, next) {
  if (req.isLoggedIn) {
    next();
  } else {
    res.redirect("/signin.html");
  }
}
cartrouter.get("/cart.html", isAuth, (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "views", "cart.html"));
});
module.exports = cartrouter;
