var Card = require('../database/cards/card.js');
var Cards = require('../database/cards/cards.js');
var User = require('../database/users/user.js');
var Users = require('../database/users/users.js');
var Connection = require('../database/connections/connection.js');
var Connections = require('../database/connections/connections.js');
/**
 * connection routes {createConnection, deleteConnection, getConnection, getLocations}
 */
var Promise = require("bluebird");
/**
 * @method: createConnection creates a connection between user and a business card
 * @param {object}: "req" request object passed to the server
 * @param {object} res response object returned to the client
 */
var connectionRoutes = {
  createConnection: function (req, res) {
    return new Promise(function (resolve, reject) {
      //get userID from the database
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
        //get cardID from the database
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
            //check if the connection already exists in the database
            where: {
              user_id: userID,
              card_id: cardID
            }
          }).fetch().then(function (connection) {
            if (connection.length < 1 && req.body.cardEmail !== req.body.email && userID && cardID) {
              //create a new connection
              return new Connection({
                user_id: userID,
                card_id: cardID,
                longitude: req.body.longitude || 0,
                latitude: req.body.latitude || 0
              }).save().then(function (newConnection) {
                // res.end(JSON.stringify(newConnection));
                //return the new connection object
                res.status(200).send({
                  message: newConnection
                });
              }).catch(function (err) {
                //throws any errors
                console.log(new Error(err));
                res.status(500).send({
                  error: err
                });
              });
            } else if (!userID) {
              //if userID is not found 
              res.status(400).send({
                error: "invalid user email"
              });
            } else if (!cardID) {
              //if cardID is not found
              res.status(400).send({
                error: "invalid card email"
              });
            } else {
              //if connection already exists
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
  /**
   * @method: deleteConnection deletes a connection between user and a business card
   * @param {object}: "req" request object passed to the server
   * @param {object} res response object returned to the client
   */
  deleteConnection: function (req, res) {
    var p = new Promise(function (resolve, reject) {
      // new User({id: 1}).fetch({ withRelated: ['city'] });
      //get userID from userEmail
      return Users.query({
        where: {
          email: req.body.email
        }
      }).fetch().then(function (users) {
        var userID = users.models[0].get("id");
        //get cardID from cardEmail
        return Cards.query({
          where: {
            email: req.body.cardEmail
          }
        }).fetch().then(function (cards) {
          if (cards.models.length > 0) {
            var cardID = cards.models[0].get("id");
            //get connectionID based on card and user emails
            return Connections.query({
              where: {
                user_id: userID,
                card_id: cardID
              }
            }).fetch().then(function (con) {
              console.log(72, con);
              if (con.length > 0) {
                //delete the connection by using destroy
                con.models[0].destroy().then(function (model) {
                  res.status(200).send({
                    message: "deleted"
                  });
                });
              } else {
                //if connectionID not found then
                res.status(400).send({
                  error: "connection does not exist"
                });
              }
            });
          } else {
            //if cardID doesnot exist
            res.status(400).send({
              error: "card does not exist"
            });
          }
        });
      });
    });
  },
  /**
   * @method:  getConnections retrieves all connections for a given user
   * @param {object}: "req" request object passed to the server
   * @param {object} res response object returned to the client
   */
  getConnections: function (req, res) {
    console.log(177);
    //find userID for a given userEmail
    return new User({
        email: req.body.email
      }).fetch({
        withRelated: ['cards']
      })
      .then(function (user) {
        //ends request with all cards related to user
        res.send(JSON.stringify(user.related('cards')));
        console.log(179, user.related('cards'));
      }).catch(function (err) {
        //throws any errors
        res.status(500).send({
          error: err
        });
      });
  },
  /**
   * @method:  getLocations retrieves all locations where a connection is created
   * @param {object}: "req" request object passed to the server
   * @param {object} res response object returned to the client
   */
  getLocations: function (req, res) {
    //find the userID 
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
        //find all connections related to the user
        return Connections.query({
          where: {
            user_id: userID
          }
        }).fetch().then(function (conns) {
          console.log(155, conns);
          //end request by sending connections with longitude and latitude information
          res.status(200).send({
            message: conns
          }).catch(function (err) {
            res.status(500).send({
              error: err
            });
          });
        })
      }).catch(function (err) {
        //throw any errors
        res.status(400).send({
          error: err
        });
      })
    })
  }
};
module.exports = connectionRoutes;
