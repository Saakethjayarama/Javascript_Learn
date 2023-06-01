const express = require("express");
const request = require("request-promise");
const constants = require("./constants");

const app = express();
app.use(express.json());

app.get("/:id", (req, res) => {
  const { id } = req.params;
  data = [
    {
      id: 10,
      name: "Jaathiratnalu",
    },
    {
      id: 20,
      name: "Business man",
    },
    {
      id: 30,
      name: "Kick",
    },
  ];

  let result = {};
  data.forEach((movie) => {
    if (movie.id == id) {
      result = movie;
      return;
    }
  });

  res.send(result);
});

app.listen(constants.MOVIE_INFO, () =>
  console.log("Listening on " + constants.MOVIE_INFO)
);
