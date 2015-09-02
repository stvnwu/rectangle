var Card = require('../database/cards/card.js');
var Cards = require('../database/cards/cards.js');
var User = require('../database/users/user.js');
var Users = require('../database/users/users.js');
var Connection = require('../database/connections/connection.js');
var Connections = require('../database/connections/connections.js');

var Promise = require("bluebird");
var connectionRoutes = {
  createConnection: function (req, res) {
    return new Promise(function (resolve, reject) {
      return Users.query({
        where: {
          email: req.body.userEmail
        }
      }).fetch().then(function (users) {
        var userID = users.models[0].get("id");
        return Cards.query({
          where: {
            email: req.body.cardEmail
          }
        }).fetch().then(function (cards) {
          var cardID = cards.models[0].get("id");
          return Connections.query({
            where: {
              userID: userID,
              cardID: cardID
            }
          }).fetch().then(function (connection) {
            if (connection.length < 1 && req.body.cardEmail !== req.body.userEmail) {
              return new Connection({
                userID: userID,
                cardID: cardID
              }).save().then(function (newConnection) {
                res.end(JSON.stringify(newConnection));
              }).catch(function (err) {
                console.log(new Error(err));
                res.end(JSON.stringify(err));
              })
            } else {
              res.end(JSON.stringify({
                "connection": "already exists"
              }))
            }
          })
        })
      })
    });
  },
  deleteConnection: function (req, res) {
    var p = new Promise(function (resolve, reject) {
      // new User({id: 1}).fetch({ withRelated: ['city'] });
      return Users.query({
        where: {
          email: req.body.userEmail
        }
      }).fetch().then(function (users) {
        var userID = users.models[0].get("id");
        return Cards.query({
          where: {
            email: req.body.cardEmail
          }
        }).fetch().then(function (cards) {
          var cardID = cards.models[0].get("id");
          return Connections.query({
            where: {
              userID: userID,
              cardID: cardID
            }
          }).fetch().then(function (con) {
            console.log(72, con);
            if (con.length > 0) {
              con.models[0].destroy().then(function (model) {
                res.end(JSON.stringify({
                  "connection": "deleted"
                }));
              })
            } else {
              res.end(JSON.stringify({
                "connection": "does not exist"
              }))
            }
          })
        })
      })
    });
  }
}
module.exports = connectionRoutes;
