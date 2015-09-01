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

describe('connecting to the database', function () {

  xit('should add users to the database using POST', function (done) {

  });

  xit('should edit users in the database', function (done) {

  });

  xit('should remove a user\'s card(s)', function (done) {

  });

  xit('should remove a user form the database', function (done) {

  });

  xit('should add a users\'s cards using post', function (done) {

  });

  xit('should edit a user\'s cards', function (done) {

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
