const fs = require("fs");

fs.unlink("ex5.txt", (err) => {
  if (err) throw err;
  console.log("Deleted!");
});
