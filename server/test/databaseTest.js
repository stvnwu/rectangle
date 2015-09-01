/**
 * @file Test database functionality
 *
*/
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
 
chai.use(chaiAsPromised);

var expect = require('chai').expect;
var should = require('chai').should;

var User = require('../database/users/user');
var Users = require('../database/users/users');
var Card = require('../database/cards/card');
var Cards = require('../database/cards/cards');
var Connection = require('../database/connections/connection');
var Connections = require('../database/connections/connections');

/**
 * @example The test below is an example of the mocha and chai syntax
*/

// describe('Array', function() {
//   describe('#indexOf()', function () {
//     it('should return -1 when the value is not present', function () {
//       var arr = [1, 2, 3];
//       expect(arr.indexOf(4)).to.equal(-1);
//     });
//   });
// });

////////////////////////////////////////////////////////
//                  DATABASE TESTING                  //
////////////////////////////////////////////////////////

/**
 * @example Test using Chai-As-Promised correctly
*/
describe('User Model and Users Collection', function() {
  it('should add a user model', function() {
    return expect(new User({email: 'testing@email.com', password: '1234'})
            .save()).to.eventually.be.fulfilled;
  });

/**
 * @todo make this work
 */
  xit('should require unique emails per signup', function() {
    return expect(new User({email: 'testing@email.com'})
      .save()
      ).to.eventually.be.rejected;
  });

  it('should find an added user', function() {
    return expect(new User({email: 'testing@email.com'})
      .fetch().then(function(user) {
        return user.get('email')
      }))
    .to.eventually.equal('testing@email.com');
  });

  it('should remove a user model', function() {
    expect(new User({email: 'testing@email.com'})
    .fetch()
    .then(function(user) {
      var id = user.get('id');
      return new User({'id': id})
      .destroy()
      .then(function(user) {
        return id;
      })
    })
    .then(function(id) {
      return new User({'id': id}).fetch()
    })).to.eventually.be.null;
  });

  xit('should store only the hashed password', function() {

  });

  it('should have all the users in the collection', function() {
    return expect(Users.fetch()).to.eventually.have.property('models');
  });

  // it just actually doesn't have the method, which is bad
  xit('should have a cards method', function() {
    return expect(new User({email: 'testing@email.com'})
    .fetch().then(function(user) {
      // console.log(user);
      return user.get('cards');
    })).to.eventually.be.a('function');
    Users.fetch()
    .then(function(users) {
      expect(users).to.have.property('models');
    });
  });

});

describe('Card Model and Cards Collection', function() {
  var user;
  new User({email: 'test4cards@email.com', password: '1234'}).save().then(function(userObj) {user = userObj});
  var id;

  it('should add a card model', function() {
    return expect(new Card({
      firstName: 'Marcus', 
      lastName: 'Phillips', 
      userID: user.get('id')
    })
    .save()
    .then(function(marcus) {
      id = marcus.get('id');
    })).to.eventually.be.fulfilled;
  });

  it('should have (a user method and) a userID property', function() {
    return expect(new Card({'id': id})
      .fetch()
      .then(function(marcus) {
        return marcus.get('userID');
      }))
    .to.eventually.equal(user.get('id'));
  });

  it('should find an added card', function() {
    return expect(new Card({'id': id})
      .fetch()
      .then(function(marcus) {
        return marcus.get('firstName');
      }))
    .to.eventually.equal('Marcus');
  });

  it('should remove an added card', function() {
    return expect(new Card({'id': id})
      .destroy()
      .then(function(marcus) {
        return new Card({'id': id})
        .fetch()
      })).to.eventually.be.null;
  });

  it('should have all cards in the collection', function() {
    return expect(Cards.fetch()).to.eventually.have.property('models');
  });
  
});

// connections collection sounds like something 101 Dalmations
// dalmatian sensation-esque
describe('Connection Model and Connections Collection', function() {
  var marcus;
  var marcusCardID;
  new User({email: 'test4cards@email.com', password: '1234'})
  .save()
  .then(function(userObj) {
    marcus = userObj;
    return new Card({
      firstName: 'Marcus', 
      lastName: 'Phillips', 
      userID: marcus.get('id')
    })
    .save()
    .then(function(card) {
      marcusCardID = card.get('id');
    });
  })


  // new Connection({userID: marcus}).save()

  it('should add a connection model', function() {
    return expect(new Connection({userID: marcus.get('id'), cardID: marcusCardID})
      .save()).to.eventually.be.fulfilled;
  });

  it('should have a (user method and) userID property', function() {
    return expect(new Connection({cardID: marcusCardID})
      .fetch()
      .then(function(connection) {
        return connection.get('userID');
      })).to.eventually.exist;
  });

  it('should have (a card method and) a cardID property', function() {
    return expect(new Connection({cardID: marcusCardID})
      .fetch()
      .then(function(connection) {
        return connection.get('cardID');
      })).to.eventually.exist;
  });

  it('should be able to find a card based on the userID', function() {
    return expect(new Connection({userID: marcus.get('id')})
      .fetch()).to.eventually.be.fulfilled;
  });

  it('should remove an added connection', function() {
    expect(new Connection({cardID: marcusCardID})
    .fetch()
    .then(function(connection) {
      var id = connection.get('id');
      return new Connection({'id': id})
      .destroy()
      .then(function(connection) {
        return id;
      })
    })
    .then(function(id) {
      return new User({'id': id}).fetch()
    })).to.eventually.be.null;
  }); 

  it('should have all the connections in the collection', function() {
    return expect(Connections.fetch()).to.eventually.have.property('models');
  });

});





