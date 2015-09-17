var userController = require('./userController.js');
/**
 * routes for signin and signup
 */
module.exports = function (app) {
  app.post('/signin', userController.signin);
  app.post('/signup', userController.signup);
};
