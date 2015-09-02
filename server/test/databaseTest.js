/**
 * @file Test database functionality
 *
*/
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
 
chai.use(chaiAsPromised);

var expect = require('chai').expect;
var should = require('chai').should

var db = require('../database/config');
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
  var testEmail = 'user@email.com';
  var testPassword = '1234';
  var user;
  var userid;

  it('should add a user model', function() {
    return expect(new User({email: testEmail, password: testPassword})
            .save()
            .then(function(userObj) {
              user = userObj;
              userid = userObj.get('id');
              return userObj;
            })).to.eventually.be.fulfilled;
  });

  // it('should require unique emails per signup', function() {
  //   return expect(new User({email: testEmail})
  //     .save()).to.eventually.be.rejected;
  // });

  it('should find an added user', function() {
    return expect(new User({email: testEmail})
      .fetch().then(function(user) {
        return user.get('email')
      }))
    .to.eventually.equal(testEmail);
  });

  it('should store only the hashed password', function() {
    expect(new User({email: testEmail})
      .fetch().then(function(user) {
        return user.get('password');
      }))
    .to.eventually.not.equal(testPassword);
  });

  it('should have all the users in the collection', function() {
    return expect(Users.fetch()).to.eventually.have.property('models');
  });

  it('should remove a user model', function() {
    return expect(new User({'id': userid})
      .destroy()
      .then(function(user) {
        return user.get('id');
      })
      .then(function(id) {
        return new User({email:testEmail}).fetch()
      })
      .catch(function(err) {
        console.log(new Error(err));
      })).to.eventually.be.null;
  });

});

describe('Card Model and Cards Collection', function() {
  var userid;
  var user = new User({email: 'test4cards@email.com', password: '1234'})
  .save()
  .then(function(userObj) {
    userid = userObj.get('id');
    console.log("user id when created", userid);
    return userObj; 
  });

  it('should add a card model', function() {
    return expect(new Card({
      firstName: 'Marcus', 
      lastName: 'Phillips',
      email: user.get('email'), 
      userID: userid
    })
    .save()).to.eventually.be.fulfilled;
  });

  it('should have (a user method and) a userID property', function() {
    return expect(new Card({userID: userid})
      .fetch()
      .then(function(marcus) {
        return marcus.get('userID');
      }))
    .to.eventually.equal(userid);
  });

  it('should find an added card', function() {
    return expect(new Card({email: user.get('email')})
      .fetch()
      .then(function(marcus) {
        return marcus.get('firstName');
      }))
    .to.eventually.equal('Marcus');
  });

  it('should have all cards in the collection', function() {
    return expect(Cards.fetch()).to.eventually.have.property('models');
  });

  it('should remove an added card', function() {
    return expect(new Card({'userID': userid})
      .fetch()
      .then(function(card) {
        return new Card({id: card.get('id')})
        .destroy()
        .then(function(marcus) {
          return new Card({userID: userid})
          .fetch()
        });
      })).to.eventually.be.null;
  });

  // remove the user
  console.log('userid', userid);
  new User({id: userid})
  .destroy()
  .then(function(user) {
    console.log('in cards, destroyed user\'s email', user.get('email'));
  })
  .catch(function(err) {
    console.log(new Error(err));
  });
  
});

// connections collection sounds like something 101 Dalmations
// dalmatian sensation-esque
describe('Connection Model and Connections Collection', function() {
  var marcus;
  var fred;
  var fredID;
  var marcusCardID;
  new User({email: 'marcus@email.com', password: '1234'})
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
  .then(function() {
    fred = new User({email: 'fred@email.com', password: 'asdf'})
    .save()
    .then(function(fredObj) {
      fred = fredObj;
      fredID = fredObj.get('id');
    })
  })

  // in general, these tests are testing the connection between
  // marcus's card and fred-the-user    

  it('should add a connection model', function() {
    return expect(new Connection({userID: fred.get('id'), cardID: marcusCardID})
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
      return new Connection({'id': id}).fetch()
    })).to.eventually.be.null;
  }); 

  it('should have all the connections in the collection', function() {
    return expect(Connections.fetch()).to.eventually.have.property('models');
  });

  // clean up after the test: remove fred, marcus, and marcus card
  new Card({id: marcusCardID})
  .destroy()
  .then(function(card) {
    new User({id: card.get('userID')})
    .destroy();
  })
  .then(function() {
    new User({id: fredID})
    .destroy();
  });

});





