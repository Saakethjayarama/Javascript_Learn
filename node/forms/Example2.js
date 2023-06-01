const http = require("http");
const formidable = require("formidable");
const fs = require("fs");

http
  .createServer((req, res) => {
    if (req.url === "/post") {
      const form = new formidable.IncomingForm();
      form.parse(req, (err, fields, files) => {
        if (err) throw err;
        const picPath = files.pic.path;
        const picName = files.pic.name;
        const picNewPath = "./" + picName;

        fs.readFile(picPath, (err, data) => {
          if (err) throw err;
          console.log("File read!");

          fs.writeFile(picNewPath, data, (err) => {
            if (err) throw err;
            console.log("File written");
          });
        });

        fs.unlink(picPath, (err) => {
          if (err) throw err;
          console.log("Deleted file");
        });

        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(`Hello`);
        res.end();
      });
    } else {
      fs.readFile("form2.html", (err, data) => {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
      });
    }
  })
  .listen(5000, () => {
    console.log("Server running on 5000");
  });
