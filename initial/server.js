const http = require('http');

const hostName = '127.0.0.1';
const hostPort = 3333;

const server = http.createServer(function(req, res){
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World \n');
});

server.listen(process.env.PORT, process.env.IP, function(){
  console.log('Server is up and running at http://'+ process.env.IP +':'+process.env.PORT+'/');
});