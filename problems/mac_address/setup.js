// Require modules

var Os = require('os');


module.exports = function (run) {

    var networkInterfaces = Os.networkInterfaces();

    return {
        args: [Object.keys(networkInterfaces)[0]]
    };
};