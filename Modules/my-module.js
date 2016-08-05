var count = 2;

var increment = function (i, callback){
    if (i < 0){
        callback(new Error("Only positive integers are allowed"), null);
    }
    else {
        callback(null, ++i);
    }
};

// Only exported methods/variables/objects van be required by other files
module.exports.increment = increment;
module.exports.foo = 'bar';
