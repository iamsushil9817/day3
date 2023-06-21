const  http = require('http');
const currentdatetime = require('./myfirstmodule');
const uc = require("upper-case");
http.createServer(function (req, res) {
  const message= uc.upperCase("hello world");
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(message + currentdatetime.myDateTime());
}).listen(8080);
console.log('App running on port 8080');