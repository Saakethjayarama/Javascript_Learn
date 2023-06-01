const http = require("http");

const hostname = "127.0.0.1";
const port = 5000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(`{
        'name': 'Saaketh',
        'usn': '1JT18CS015'
    }`);
});

server.listen(port, hostname, () => {
  console.log(`Server running on ${hostname}:${port}`);
});
