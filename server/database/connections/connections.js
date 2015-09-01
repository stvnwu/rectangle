/**
 * @file Creates and adds functionality to the Connections collection
*/

var db = require('../config');
var Connection = require('./connection');

var Connections = new db.Collection();

Connections.model = Connection;

module.exports = Connections;
