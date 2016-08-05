var EventEmitter = require('events').EventEmitter;

// Event publishment
var getResource = function (c) {
    var event = new EventEmitter();
    
    process.nextTick(function () {
        var count = 0;
        event.emit('start');
        var t = setInterval(function () {
            event.emit('data', ++count);
            if (count === c) {
                event.emit('end', count);
                clearInterval(t);
            }
        }, 10);
    });
    
    return event;
};

// Subscription
var r = getResource(5);

r.on('start', function () {
    console.log("Started");
});

r.on('data', function (d) {
    console.log("Data : " + d);
});

r.on('end', function (t) {
    console.log("End with " + t + " data events");
});