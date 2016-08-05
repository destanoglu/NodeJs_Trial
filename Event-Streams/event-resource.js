// In this case we inherit from emitter object to gain emitting behaviour

var util = require("util");
var EventEmitter = require("events");

function Resource(m){
    var maxEvents = m;
    var self = this;
    
    process.nextTick(function () {
       var count = 0;
       self.emit('start');
       var t = setInterval(function () {
           self.emit('data', ++count);
           if (count === maxEvents){
               self.emit('end', maxEvents);
               clearInterval(t);
           }
       }, 10);
    });
}

// Emitter class is integrated to Resource class
util.inherits(Resource, EventEmitter);

module.exports = Resource;