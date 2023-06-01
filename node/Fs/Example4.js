const fs = require("fs");

fs.writeFile(
  "ex4.txt",
  "Saaketh is a very good boy\nHe loves pancakes",
  (err) => {
    if (err) throw err;
    console.log("Written/Created");
  }
);
