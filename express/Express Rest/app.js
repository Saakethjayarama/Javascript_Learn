const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");

//Every time we use middle ware we register it here
app.use("/public", express.static(path.join(__dirname, "static"))); // to send files from static folder
app.use(bodyParser.urlencoded({ extended: false })); // to get the form body as res.body
app.use(bodyParser.json()); // to attach json to res.body

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/home", (req, res) => {
  res.send("Hitting home route");
});

app.get("/home/:name/:age", (req, res) => {
  const { name, age } = req.params; // route parameters (required)
  console.log(req.query); // ? params query parameters (optional)
  res.send(`Hello ${name} you're ${age} years old`);
});

app.get("/index", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "index.html"));
});

app.post("/index", (req, res) => {
  console.log(req.body);
  res.send(JSON.stringify(req.body));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "login.html"));
});
app.post("/login", (req, res) => {
  console.log(req.body);
  res.send("Received");
});

app.listen(3000);
