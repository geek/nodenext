var Http = require('http');

var server = Http.createServer(function (req, res) {
    res.statusMessage = 'Nope';
    res.end();
});

server.listen(+process.argv[2]);