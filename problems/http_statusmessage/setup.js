// Require modules

var stream = require('stream');
var net = require('net');
var util = require('util');


module.exports = function (run) {

    var submissionOut = new stream.PassThrough();
    var solutionOut = new stream.PassThrough();

    setTimeout(function () {

        var subBufs = [];
        var subClient = net.connect(8080, function() {
            subClient.write('GET / HTTP/1.1\r\nConnection: close\r\n\r\n');
        });
        subClient.on('data', function(chunk) {
            subBufs.push(chunk);
        });
        subClient.on('end', function() {
            var head = Buffer.concat(subBufs).toString('binary').split('\r\n')[0];
            submissionOut.write(head);
            submissionOut.end();
        });

        if (!run) {
            var solBufs = [];
            var solClient = net.connect(8080, function() {
                solClient.write('GET / HTTP/1.1\r\nConnection: close\r\n\r\n');
            });
            solClient.on('data', function(chunk) {
                solBufs.push(chunk);
            });
            solClient.on('end', function() {
                var head = Buffer.concat(solBufs).toString('binary').split('\r\n')[0];
                solutionOut.write(head);
                solutionOut.end();
            });
        }
    }, 500);

    return {
        submissionArgs: [8080],
        solutionArgs: [8081],
        a: submissionOut,
        b: solutionOut
    };
};

