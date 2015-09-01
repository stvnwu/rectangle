var express = require('express');
var app = express();
var server = require('http').Server(app);


/** @example Configuring server for Heroku with Mongo/ose

 * var localuri = 'mongodb://localhost/seatly';
 * var uristring = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || localuri;
*/
var host = process.env.DATABASE_URL || '127.0.0.1';
var port = process.env.PORT || 5000;

require('./config/middleware.js')(app, express);

server.listen(port);

module.exports = {
  'app': app,
  'port': port,
  'host': host
};
