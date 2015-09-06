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
          email: req.body.email
        }
      }).fetch().then(function (users) {
        var userID;
        if (users.models.length > 0) {
          userID = users.models[0].get("id");
        }
        return Cards.query({
          where: {
            email: req.body.cardEmail
          }
        }).fetch().then(function (cards) {
          var cardID;
          console.log(27, cards);
          if (cards.models.length > 0) {
            cardID = cards.models[0].get("id");
          }
          return Connections.query({
            where: {
              userID: userID,
              cardID: cardID
            }
          }).fetch().then(function (connection) {
            if (connection.length < 1 && req.body.cardEmail !== req.body.email && userID && cardID) {
              return new Connection({
                userID: userID,
                cardID: cardID
              }).save().then(function (newConnection) {
                res.end(JSON.stringify(newConnection));
              }).catch(function (err) {
                console.log(new Error(err));
                res.end(JSON.stringify(err));
              })
            } else if (!userID) {
              res.status(400).send('invalid user email');
            } else if (!cardID) {
              res.status(400).send('invalid card email');
            } else {
              res.status(400).send('connection already exists');
            }
          }).catch(function (err) {
            res.status(400).send('password/email does not match');
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
          email: req.body.email
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
              res.status(400).send('connection does not exist');
            }
          })
        })
      })
    });
  }
}
module.exports = connectionRoutes;
