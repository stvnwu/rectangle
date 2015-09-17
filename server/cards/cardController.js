var Card = require('../database/cards/card.js');
var Cards = require('../database/cards/cards.js');
var User = require('../database/users/user.js');
var Users = require('../database/users/users.js');

var Promise = require("bluebird");
/**
 * CardRoutes Description
 * @method {createCard, getCard}
 */
var cardRoutes = {
  /**
   * @method: createCard creates a new business card and saves cardinfo to database
   */
  createCard: function (req, res) {
    return new Promise(function (resolve, reject) {
      //find if a user exists in the database
      Users.query({
        where: {
          email: req.body.userEmail
        }
      }).fetchOne().then(function (user) {
        //if user is in the database, check if any other card exists with the given email
        if (user) {
          Cards.query({
            where: {
              email: req.body.email
            }
          }).fetchOne().then(function (card) {
            //if card exists update the card with latest information 
            if (card) {
              console.log(65, req.body.cardEmail);
              card.save({
                firstName: req.body.firstName || card.get("firstName"),
                lastName: req.body.lastName || card.get("lastName"),
                company: req.body.company || card.get("company"),
                phone: req.body.phone || card.get("phone"),
                email: req.body.email || card.get("email"),
                jobTitle: req.body.jobTitle || card.get("jobTitle")
              }).then(function (updatedCard) {
                res.status(200).send({
                  message: updatedCard
                });
              });
            } else {
              //if card doesn't exist create a new card 
              return new Card({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                company: req.body.company,
                phone: req.body.phone,
                jobTitle: req.body.jobTitle,
                userID: user.get("id"),
                email: req.body.email,
              }).save().then(function (newCard) {
                console.log(85, newCard);
                // send the new card as response
                res.status(200).send({
                  message: newCard
                });
              }).catch(function (err) {
                console.log(88, new Error(err));
                //if any error send status 500 with error message
                res.status(500).send({
                  error: err
                });
              });
            }
          });
        } else {
          //if user is not found send him back to login throw error
          res.status(400).send({
            error: "user not logged in"
          });
        }
      });
    });
  },
  /**
   *@method: getCard retrieves card information for a specific card
   */
  getCard: function (req, res) {
    //query cards table to check if a card exists
    return new Promise(function (resolve, reject) {
      Cards.query({
        where: {
          email: req.body.cardEmail
        }
      }).fetchOne().then(function (card) {
        console.log(63, card);
        //if card is found return card info
        if (card) {
          res.status(200).send({
            message: card
          });
        } else {
          //else no card found associated with email
          res.status(400).send({
            error: "no card found related to email"
          });
        }
      }).catch(function (err) {
        //throws any errors
        console.log(new Error(err));
        res.status(500).send({
          error: err
        });
      });
    });
  }
};
module.exports = cardRoutes;
