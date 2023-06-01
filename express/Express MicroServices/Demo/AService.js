const express = require("express");
const request = require("request-promise");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  const options = {
    method: "GET",
    uri: "http://localhost:1501",
  };

  request(options)
    .then((response) => {
      const respObj = JSON.parse(response);
      res.send(respObj);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen(1500, () => console.log("Listening on 1500"));
