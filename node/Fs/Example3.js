const fs = require("fs");

fs.open("ex3.txt", (err, file) => {
  if (err) throw err;
  console.log("Exists");
});
