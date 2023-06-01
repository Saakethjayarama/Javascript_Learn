const express = require("express");
const request = require("request-promise");
const constants = require("./constants");

const app = express();
app.use(express.json());

app.get("/:id", async (req, res) => {
  const { id } = req.params;

  const optionsInfo = {
    method: "GET",
    uri: `http://localhost:${constants.MOVIE_INFO}/${id}`,
  };

  const infoPromise = await request(optionsInfo);
  const info = JSON.parse(infoPromise);

  const optionsRating = {
    method: "GET",
    uri: `http://localhost:${constants.MOVIE_RATING}/${id}`,
  };

  const ratingPromise = await request(optionsRating);
  const rating = JSON.parse(ratingPromise);

  const result = {
    ...info,
    ...rating,
  };

  res.send(result);
});

app.listen(1500, () => console.log("Listening on 1500"));
