var maxTime = 1000;

var evenDoubler = function(v, callback){
    
    var sleepTime = Math.floor((Math.random() * maxTime) + 1);
    
    setTimeout(function (argument) {
        if (v%2 === 0){
            callback(null, v * 2, sleepTime);
        }
        else {
            callback(new Error("Only even inputs are allowed"), null, sleepTime);
        }
    }, sleepTime);
};

var count = 0;

var handleResult = function (err, results, time) {
    if (err){
        console.error(err.message);
    }
    else {
        console.log("Result is " + results + " ( " + time + " )");
    }
    if (++count === 10){
        console.log("DONE");
    }
    
};

for (var i = 0; i < 10; i++) {
    evenDoubler(i + 1, handleResult);
}
    