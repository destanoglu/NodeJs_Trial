// performs socket based communication using events
// server and client communicates through events with socket.on() socket.emit() methods
// Using socket.io we can change the content of the web page without any refreshes
// required socket.io

// cloud9 does not support web sockets

// socket io can listen through a web server (socketio.listen(http.createServer(the_server))

var http = require("http");
var socketio = require("socket.io")({
    // To handle the web socket support shortage on Cloud9 IDE
    transports : ['xhr-polling']
});
var fs = require("fs");

var handler = function (req, res) {
    fs.readFile(__dirname + '/index.html', function (err, data) {
       if (err) {
           res.writeHead(500);
           return res.end('Error loading index');
       } 
       else {
           res.writeHead(200);
           res.end(data);
       }
    });
};

var app = http.createServer(handler);
var io = socketio.listen(app);

io.sockets.on('connection', function(socket) {
    setInterval(function () {
       var timestamp = Date.now();
       console.log('Emitted: ' + timestamp);
       socket.emit('timer', timestamp);
    }, 2000);
    socket.on('submit', function (data) {
        console.log('Submitted : ' + data)
    });
});

app.listen(process.env.PORT, process.env.IP);

console.log("Up and running");