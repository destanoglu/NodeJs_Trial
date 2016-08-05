var http = require("http");
var fs = require("fs");


http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  if (req.url === '/file.txt') {
      // open a readable stream and pipe it into the response which is alsa a writable stream
      fs.createReadStream(__dirname + '/file.txt').pipe(res);
  }
  else {
      res.end("Hello world\n");
  }
}).listen(process.env.PORT, process.env.IP);

console.log("Server is up and running :) ");