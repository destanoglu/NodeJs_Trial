process.stdin.resume(); 
process.stdin.setEncoding('utf8');

process.stdin.on('data', function (chunk) {
    process.stdout.write('Data -> ' + chunk);
});

process.stdin.on('end', function () {
    process.stderr.write('End!\n');
});

// This will be triggered by issuing kill command by entering "kill -TERM pid"
process.on('SIGTERM', function () {
    process.stderr.write("You cannot kill me by this way :)");  // Until we code process.exit()
});

console.log("Node is running as process #" + process.pid);