const app = require("express")();

app.set("views", "views");
app.set("view engine", "ejs");

const userRoute = require("./routes/UserRoute");
app.use("/user", userRoute);

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(80, () => {
  console.log("Listening on localhost");
});
