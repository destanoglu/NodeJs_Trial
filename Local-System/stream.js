// Process is inherited from EventEmitter so it emits events

process.stdin.resume(); // It starts paused so we need to resume to begin
process.stdin.setEncoding('utf8');

process.stdin.on('data', function (chunk) {
    process.stdout.write('Data -> ' + chunk);
});

// If wee end the program with ctrl+D (tells the terminal that it should register a EOF on standard input, which bash interprets as a desire to exit, so it is different from ctrl+c) the end event is emitted.
process.stdin.on('end', function () {
    process.stderr.write('End!\n');
});
