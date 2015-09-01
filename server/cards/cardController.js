var Card = require('../database/cards/card.js');
var Cards = require('../database/cards/cards.js');
var User = require('../database/users/user.js');
var Users = require('../database/users/users.js');

var Promise = require("bluebird");
var cardRoutes = {
  createCard: function (req, res) {
    return new Promise(function (resolve, reject) {
      console.log(7, req.body);
      Cards.query({
        where: {
          email: req.body.email
        }
      }).fetchOne().then(function (card) {
        if (card) {
          card.save({
            firstName: req.body.firstName || card.get("firstName"),
            lastName: req.body.lastName || card.get("lastName"),
            company: req.body.company || card.get("company"),
            phone: req.body.phone || card.get("phone"),
            jobTitle: req.body.jobTitle || card.get("jobTitle")
          }).then(function (updatedCard) {
            res.end(JSON.stringify(updatedCard));
          })
        } else {
          //check to pass in entire object
          return new User({
            email: req.body.userEmail
          }).fetch().then(function (user) {
            return new Card({
              firstName: req.body.firstName,
              lastName: req.body.lastName,
              company: req.body.company,
              phone: req.body.phone,
              jobTitle: req.body.jobTitle,
              email: req.body.email,
              userID: user.get("id")
            }).save().then(function (newCard) {
              console.log(20, newCard);
              res.end(JSON.stringify(newCard));
            }).catch(function (err) {
              console.log(new Error(err));
              res.end(JSON.stringify(err));
            })
          })
        }
      })
    });
  },
  getCards: function (req, res) {
    var p = new Promise(function (resolve, reject) {
      return Cards.query({
          where: {
            email: req.body.email
          }
        }).fetchOne()
        .then(function (card) {
          res.end(JSON.stringify(card))
            .catch(function (err) {
              console.log(new Error(err));
              res.end(JSON.stringify(err));
            })
        });
    });
  }
}
module.exports = cardRoutes;
