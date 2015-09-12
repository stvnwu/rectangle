/**
 * @file Creates and adds functionality to the Card model
*/

var db = require('../config');
var User = require('../users/user');
var Connection = require('../connections/connection');
var Promise = require('bluebird');

var Card = db.Model.extend({
  tableName: 'cards',
  hasTimestamps: true,
  users: function() {
    // return this.belongsTo(User);
    return this.belongsToMany(User).through(Connection);
  }
});

module.exports = Card;
