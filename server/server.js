var express = require('express');

var app = express();
var server = require('http').Server(app);

require('./config/middleware.js')(app, express);

server.listen(8080);
module.exports = app;
