var cardController = require('./cardController.js');

module.exports = function (app) {
  app.post('/createcard', cardController.createCard);
  app.post('/getcards', cardController.getCards);
};
