/**
 * @file test server functionality
 *
 */
var chai = require("chai");
var expect = require('chai').expect;
var should = require('chai').should;
var supertest = require('supertest');
var api = supertest('http://localhost:8080');
var app = require('../server.js');
var userController = require('../users/userController.js');
var cardController = require('../cards/cardController.js');
var connectionController = require('../connections/connectionController.js');

var User = require('../database/users/user');
var Users = require('../database/users/users');
var Card = require('../database/cards/card');
var Cards = require('../database/cards/cards');
var Connection = require('../database/connections/connection');
var Connections = require('../database/connections/connections');

/**
 * Test all of the routes that the API will and will not support
*/

describe('routing test', function () {
  it("/ should return 404", function (done) {
    api.get('/')
      .set('Accept', 'application/json')
      .expect(404, done);
  });

  it("users routing get/post", function (done) {
    api.get('/users/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, res) {
        expect(typeof res.body).to.equal("object");
        done();
      });
  });

  it("cards routing get/post", function (done) {
    api.get('/cards/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, res) {
        expect(typeof res.body).to.equal("object");
        done();
      });
  });

  it("connections routing get/post", function (done) {
    api.get('/connections/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, res) {
        expect(typeof res.body).to.equal("object");
        done();
      });
  });

});


/**
 * test the connection between the server and the database
*/
describe('connecting to the database', function () {

  xit('should add users to the database using POST', function (done) {
    // use API route to write to database
    // query database to make sure the new user is added
    // save hashed password to a variable

  });

  xit('should edit users in the database', function (done) {
    // use API route to edit a password
    // query database to confirm it's not the 
    // same hashed password as before

  });

  xit('should remove a user from the database', function (done) {
    // use API route to delete a user
    // query database to confirm user doesn't exist

  });

  xit('should add a users\'s cards using post', function (done) {
    // get a user's email
    // use API route to add a card, tied to that email
    // confirm that the card has been created

  });

  xit('should edit a user\'s cards', function (done) {

  });

  xit('should remove a user\'s card(s)', function (done) {

  });

  xit('should find all of the cards that belong to a user', function (done) {

  });

  xit('should create connections between a card and another user', function (done) {

  });

  xit('should find all the cards a user has a connection with', function (done) {

  });

  xit('should remove connections between a card and another user', function (done) {

  });

});
