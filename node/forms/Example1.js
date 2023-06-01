const http = require("http");
const formidable = require("formidable");
const fs = require("fs");

http
  .createServer((req, res) => {
    if (req.url === "/post") {
      const form = new formidable.IncomingForm();
      form.parse(req, (err, fields, files) => {
        if (err) throw err;
        let name = fields.name;
        let usn = fields.usn;
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(`Hello ${name}, ur usn is ${usn}`);
        res.end();
      });
    } else {
      fs.readFile("form1.html", (err, data) => {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
      });
    }
  })
  .listen(5000, () => {
    console.log("Server running on 5000");
  });
