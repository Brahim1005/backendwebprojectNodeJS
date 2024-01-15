const http = require('http');

const app = require('./index');

const port = 3455;

const server = http.createServer(app);

server.listen(port);