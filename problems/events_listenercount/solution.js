var events = require('events');
var http = require('http');

var server = http.createServer(function (req, res) {

});

console.log(events.listenerCount(server, 'request'));