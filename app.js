const path = require("path");

const express = require("express");
const app = express();
app.use(express.static(path.join(__dirname, "public")));
const homerouter = require("./routes/home");
const signinrouter = require("./routes/signin");
const signuprouter = require("./routes/signup");
const productrouter = require("./routes/product");
const cartrouter = require("./routes/cart");
const notfoundrouter = require("./routes/404");
app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});
app.use(express.urlencoded({ extended: true }));
app.use(homerouter);
app.use(signinrouter);
app.use(signuprouter);
app.use(productrouter);
app.use(cartrouter);
app.use(notfoundrouter);

const port = 8790;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
