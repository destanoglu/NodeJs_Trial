// http module redirection yapmamaktadır. Normalde 301 (source removed) dönüşü alındığında yeni konumda verilir ve doğrudan oraya gidilir (misal Chrome' da ya da request modulünde)
var http = require("http");

var options = {
  host: 'www.google.com',
  port: 80,
  path: '/',
  method: 'GET'
};

console.log("Making request");

var req = http.request(options, function (response) {
   console.log(response.statusCode);
   response.pipe(process.stdout);
});

// closing the request
// If we use http.get, we do not need to close the request because it is closed after call and no need to capture the return (var req)
req.end();