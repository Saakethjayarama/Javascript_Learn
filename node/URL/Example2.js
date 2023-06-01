const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    const path = `.${req.url}.html`;
    fs.readFile(path, (err, data) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write("Err 404, Url not found");
        return res.end();
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  })
  .listen(5050, () => {
    console.log("Server is running on port 5050");
  });
