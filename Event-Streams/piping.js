var request = require("request");
var fs = require("fs");
var zlib = require('zlib');

//// Stream to stdout
//var s = request("http://www.pluralsight.com/");
//s.pipe(process.stdout);


//// Stream to file
//var s = request("http://www.pluralsight.com/");
//s.pipe(fs.createWriteStream('pluralsight.html'));

// Creating readable-writable stream
var s = request("http://www.pluralsight.com/");
var zipped = s.pipe(zlib.createGzip());
zipped.pipe(fs.createWriteStream('pluralsight.html.gzip'));
// This can be piped in one line of code as :)
request("http://www.pluralsight.com/").pipe(zlib.createGzip()).pipe(fs.createWriteStream('pluralsight_2.html.gzip'));