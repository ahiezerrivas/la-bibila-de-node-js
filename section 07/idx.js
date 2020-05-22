const http = require("http");
const fs = require("fs");

const html = fs.readFileSync("./index.html");

http
    .createServer((requiere, response) => {
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write(html);
        response.end();
    })
    .listen(8080);