var userController = require('./userController.js');


module.exports = function (app) {
  app.get('/api', userController.api);
  app.get('/', userController.all);
};
