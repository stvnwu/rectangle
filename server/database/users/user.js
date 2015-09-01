/**
 * @file Creates and adds functionality to the User model
*/

var db = require('../config');
var Card = require('../cards/card');
var Promise = require('bluebird');
var bcrypt = require('bcrypt');

var User = db.Model.extend({
  tableName: 'users',
  hasTimestamps: true,
  cards: function() {
    return this.hasMany(Card);
  }
  // ,
  // initialize: function(){
  //   this.on('creating', this.hashPassword);
  // },
  // comparePassword: function(attemptedPassword) {
  //   var compare = Promise.promisify(bcrypt.compare);
  //   return compare(attemptedPassword, this.get('password'))
  //   .then(function(isMatch) {
  //     return isMatch;
  //   })
  //   .catch(function(err) {
  //     console.log(new Error(err));
  //   });
  // },
  // hashPassword: function(){
  //   var cipher = Promise.promisify(bcrypt.hash).bind(this);
  //   // return a promise - bookshelf will wait for the promise
  //   // to resolve before completing the create action
  //   console.log('---------->below nBind');

  //   return cipher(this.get('password'), null, null)
  //   .bind(this)
  //   .then(function(hash) {
  //     console.log('inside then');
  //     this.set('password', hash);
  //   });
  // }
});

module.exports = User;

/** 
 * @todo figure out if we authenticate here or client-side
 */
