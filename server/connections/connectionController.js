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
        console.log(21, userID);
        return Cards.query({
          where: {
            email: req.body.cardEmail
          }
        }).fetch().then(function (cards) {
          var cardID;
          // console.log(27, cards);
          if (cards.models.length > 0) {
            cardID = cards.models[0].get("id");
          }
          return Connections.query({
            where: {
              user_id: userID,
              card_id: cardID
            }
          }).fetch().then(function (connection) {
            if (connection.length < 1 && req.body.cardEmail !== req.body.email && userID && cardID) {
              return new Connection({
                user_id: userID,
                card_id: cardID,
                longitude: req.body.longitude || 0,
                latitude: req.body.latitude || 0
              }).save().then(function (newConnection) {
                // res.end(JSON.stringify(newConnection));
                res.status(200).send({
                  message: newConnection
                });
              }).catch(function (err) {
                console.log(new Error(err));
                res.status(500).send({
                  error: err
                });
              });
            } else if (!userID) {
              res.status(400).send({
                error: "invalid user email"
              });
            } else if (!cardID) {
              res.status(400).send({
                error: "invalid card email"
              });
            } else {
              res.status(400).send({
                error: "connection already exists"
              });
            }
          }).catch(function (err) {
            res.status(400).send({
              error: "password/email does not match"
            });
          });
        });
      });
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
          if (cards.models.length > 0) {
            var cardID = cards.models[0].get("id");
            return Connections.query({
              where: {
                user_id: userID,
                card_id: cardID
              }
            }).fetch().then(function (con) {
              console.log(72, con);
              if (con.length > 0) {
                con.models[0].destroy().then(function (model) {
                  res.status(200).send({
                    message: "deleted"
                  });
                });
              } else {
                res.status(400).send({
                  error: "connection does not exist"
                });
              }
            });
          } else {
            res.status(400).send({
              error: "card does not exist"
            });
          }
        });
      });
    });
  },
  getConnections: function (req, res) {
    console.log(177);
    return new User({
        email: req.body.email
      }).fetch({
        withRelated: ['cards']
      })
      .then(function (user) {
        // console.log(179, data.related('cards'));
        res.send(JSON.stringify(user.related('cards')));
        console.log(179, user.related('cards'));
      }).catch(function (err) {
        res.status(500).send({
          error: err
        });
      });
  },
  getLocations: function (req, res) {
    return new Promise(function (resolve, reject) {
      Users.query({
        where: {
          email: req.body.email
        }
      }).fetchOne().then(function (users) {
        var userID = users.get('id');
        console.log(145, users);
        console.log(146, userID);
        return userID;
      }).then(function (userID) {
        return Connections.query({
          where: {
            user_id: userID
          }
        }).fetch().then(function (conns) {
          console.log(155, conns);
          res.status(200).send({
            message: conns
          }).catch(function (err) {
            res.status(500).send({
              error: err
            });
          });
        })
      }).catch(function (err) {
        res.status(400).send({
          error: err
        });
      })
    })
  }
};
module.exports = connectionRoutes;
// connectionRoutes.gc();
