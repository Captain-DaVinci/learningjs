var http = require("http");
var fs = require("fs");

http
  .createServer(function (req, res) {
    fs.readFile("example.html", function (err, data) {
      if (err) {
        console.error(err);
        return;
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  })
  .listen(8080);


  http.createServer()