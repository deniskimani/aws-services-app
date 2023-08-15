const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).json(`My API is running 😎 huh?!`);
});

module.exports = app;
