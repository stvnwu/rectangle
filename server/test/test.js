/**
 * @file Test server and database functionality
 *
*/

var expect = require('chai').expect;
var should = require('chai').should;
// var User = require('../database/user/user');
// var Users = require('../database/user/users');
// var Card = require('../database/card/card');
// var Cards = require('../database/card/cards');
// var Connection = require('../database/connection/connection');
// var Connections = require('../database/connection/connections');

describe('Array', function() {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      var arr = [1, 2, 3];
      expect(arr.indexOf(4)).to.equal(-1);
    });
  });
});

////////////////////////////////////////////////////////
//                  DATABASE TESTING                  //
////////////////////////////////////////////////////////

xdescribe('User Model and Users Collection', function() {
  it('should add a user model', function() {

  });

  it('should require a first name, last name, email, and password', function() {

  });

  it('should find an added user', function() {

  });

  it('should remove a user model', function() {

  });

  it('should store only the hashed password', function() {

  });

  it('should have all the users in the collection', function() {

  });

  it('should have a cards method', function() {

  });
});

xdescribe('Card Model and Cards Collection', function() {
  it('should add a card model', function() {

  });

  it('should have a user method and a userID property', function() {

  });

  it('should find an added card', function() {

  });

  it('should remove an added card', function() {

  });

  it('should have all cards in the collection', function() {

  });
});

// connections collection sounds like something 101 Dalmations
// dalmatian sensation-esque
xdescribe('Connection Model and Connections Collection', function() {
  it('should add a connection model', function() {

  });

  it('should have a user method and userID property', function() {

  });

  it('should have a card method and a cardID property', function() {

  });

  it('should be able to find a card based on the userID', function() {
    // find one
    // find all

  });

  it('should remove an added connection', function() {

  });

  it('should have all the connections in the collection', function() {

  });
});



////////////////////////////////////////////////////////
//                   SERVER TESTING                   //
////////////////////////////////////////////////////////
