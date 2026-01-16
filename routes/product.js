const path = require("path");

const express = require("express");
const productrouter = express.Router();

productrouter.get("/product.html", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "views", "product.html"));
});

module.exports = productrouter;
