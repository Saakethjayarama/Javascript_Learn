const fs = require("fs");

fs.appendFile("ex2.txt", "Hello world", (err) => {
  if (err) throw err;
  console.log("Saved!");
});
