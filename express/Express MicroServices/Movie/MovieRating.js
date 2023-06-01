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
      rate: 5,
    },
    {
      id: 20,
      rate: 2.5,
    },
    {
      id: 30,
      rate: 3,
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

app.listen(constants.MOVIE_RATING, () =>
  console.log("Listening on " + constants.MOVIE_RATING)
);
