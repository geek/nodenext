#!/usr/bin/env node

var Workshopper = require('workshopper');
var Path = require('path');


Workshopper({
    name: 'nodenext',
    title: 'Node Next',
    appDir: __dirname,
    helpFile : Path.join(__dirname, 'help.txt')
}).init();