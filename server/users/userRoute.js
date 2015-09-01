var userController = require('./userController.js');

module.exports = function (app) {
  app.get('/', userController.userGet);
  app.post('/', userController.userPost);
};
