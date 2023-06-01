const url = require("url");
const adr = `https://www.sudoer.com/home?name=saaketh&age=20`;

var q = url.parse(adr);
console.log(q.host);
console.log(q.pathname);
console.log(q.search);
