var myModule = require("./my-module");

var handleResponse = function (err, result) {
    if (err) {
        console.log("ERROR : " + err.message);
    }
    else {
        console.log(result);
    }
};

myModule.increment(25, handleResponse);
myModule.increment(-2, handleResponse);