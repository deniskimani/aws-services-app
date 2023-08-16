const express = require("express");
const app = express();
require('dotenv').config()
const db = require('../scripts/queries')

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json(`My API is running 😎 huh?!`);
});
app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)

module.exports = app;