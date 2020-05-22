const http = require("http");

http
    .createServer((requiere, response) => {
        response.write("Hello world from Node.js");
        response.end();
    })
    .listen(8080);