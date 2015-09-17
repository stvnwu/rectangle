var cardController = require('./cardController.js');
/**
 * create routes for create and get cards
 */
module.exports = function (app) {
  app.post('/createcard', cardController.createCard);
  app.post('/getcard', cardController.getCard);
};
