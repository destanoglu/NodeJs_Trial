var Resource = require("./event-resource");

var r = new Resource(7);

r.on('start', function () {
    console.log("Started");
});

r.on('data', function (d) {
    console.log("Data : " + d);
});

r.on('end', function (t) {
    console.log("End with " + t + " data events");
});