// Buffers provide a raw memoty allocation for dealing with binary data directly. Networking and file system require it.
// Convertion to/from string is supplied by encoding (ascii, utf8, base64, binary, hex, ...)
// ReadFile operations generate buffers and we get the string of it by its toString() function

var b = new Buffer('Hello');

console.log(b.toString());
console.log(b.toString('base64'));

var x = new Buffer('world').toString('base64');
console.log(b.toString('utf-8', 0, 2)); // applying substring operations
