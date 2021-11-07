let http = require("http");
let fs = require("fs");
const evens = require("./evenNums.js");

fs.writeFile("file.txt","Even numbers: " + evens.myEvenNumbers(100),
function (err) {
    if (err) throw err;
    console.log("Replaced");
});

http.createServer(function (request, response) {
    fs.readFile('file.txt',function(error,data){
        response.write(data);
        response.end();
    })
}).listen(3003);
