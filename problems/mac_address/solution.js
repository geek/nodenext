var Os = require('os');

var networkInterface = process.argv[2];
console.log(Os.networkInterfaces()[networkInterface][0].mac);