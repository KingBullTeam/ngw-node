var http = require('http');

http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text-plain' });
    response.end('<h1>Hello Niuguwang</h1>');
}).listen(3000);
