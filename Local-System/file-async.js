var fs = require("fs");

if (fs.existsSync('temp')){
    console.log('Directory exists, removing...');
    if (fs.existsSync('temp/new.txt')){
        fs.unlinkSync('temp/new.txt');
    }
    fs.rmdirSync('temp');
}


// Below code demonstrates a christmas tree problem because we cannot track the callback functions visually
// It should be refactored
fs.mkdir('temp', function (err) {
    if (!err) {
        process.chdir('temp');
        fs.writeFile('temp.txt', 'This is the async file content which is generated automatically', function (err) {
            if (!err){
                fs.rename('temp.txt', 'new.txt', function (err) {
                    if(!err){
                        fs.stat('new.txt', function (err, stats) {
                            if (!err) {
                                console.log('File size : ' + stats.size + ' bytes');
                                fs.readFile('new.txt', function (err, content) {
                                    if (!err) {
                                        console.log('Content : ' + content.toString());
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });
    }
})