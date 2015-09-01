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
  })

  it("users routing get/post", function (done) {
    api.get('/users/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, res) {
        expect(typeof res.body).to.equal("object");
        done();
      });
  })

  it("cards routing get/post", function (done) {
    api.get('/cards/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, res) {
        expect(typeof res.body).to.equal("object");
        done();
      });
  })

  it("connections routing get/post", function (done) {
    api.get('/connections/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, res) {
        expect(typeof res.body).to.equal("object");
        done();
      });
  })

});
