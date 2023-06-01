const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url);
  res.writeHead(200, { "Content-Type": "auto" });

  switch (req.url) {
    case "/home":
      res.writeHead(200, { "Content-Type": "auto" });
      res.write("In Home");
      break;
    case "/about":
      res.writeHead(200, { "Content-Type": "auto" });
      res.write("In about");
      break;
    default:
      res.writeHead(404, { "Content-Type": "auto" });
      res.write("Err 404");
  }

  res.end();
});

server.listen(5000, () => {
  console.log("Server is running");
});
