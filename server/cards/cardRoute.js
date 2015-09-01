var cardController = require('./cardController.js');

module.exports = function (app) {
  app.get('/', cardController.cardGet);
  app.post('/', cardController.cardPost);
};
