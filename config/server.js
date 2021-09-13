var express = require('express');
var app = express();
var porta = 5555;

app.use(express.static('./'));

module.exports = {app,porta}