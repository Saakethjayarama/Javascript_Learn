const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send({
    name: "Saaketh",
    usn: "015",
  });
});

app.listen(1501, () => console.log("Listening on 1501"));
