const crashyboi = require('./index.js');

const http = require('http')
const port = 3000

const requestHandler = (request, response) => {
  crashyboi();
}

const server = http.createServer(requestHandler)

server.listen(port)


