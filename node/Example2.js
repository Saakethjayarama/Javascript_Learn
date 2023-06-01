var http = require("http");
var dt = require("./myModule");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(`The date and time is ${dt.myDateTime()}`);
  res.end();
});

server.listen(5000, () => {
  console.log("Server is running");
});
