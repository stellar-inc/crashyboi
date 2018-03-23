const crashyboi = require("./index.js");
const http = require("http");
const port = 3000;
crashyboi();
const requestHandler = (request, response) => {
  console.log(request.url);
  response.end("Hello Node.js Server!");
};

const server = http.createServer(requestHandler);

server.listen(port);
