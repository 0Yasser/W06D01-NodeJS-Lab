const http = require('http');

http.createServer(function(request, response) {
    response.write('Hello world!');
    response.end();
}).listen(3000);

// let http = require('http');
// let fs = require('fs');
// http.createServer(function (req, res) {
//   //Open a file on the server and return its content:
//   fs.readFile('file.html', function(err, data) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     return res.end();
//   });
// }).listen(3003);