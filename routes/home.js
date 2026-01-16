const path = require("path");

const express = require("express");
const homerouter = express.Router();

homerouter.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "views", "index.html"));
});

module.exports = homerouter;
