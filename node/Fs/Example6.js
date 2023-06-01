const fs = require("fs");

fs.rename("ex6__.txt", "ex6.txt", (err) => {
  if (err) throw err;
  console.log("Renamed");
});
