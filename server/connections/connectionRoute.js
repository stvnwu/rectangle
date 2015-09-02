var connectionController = require('./connectionController.js');

module.exports = function (app) {
  app.post('/createconnection', connectionController.createConnection);
  app.delete('/deleteconnection', connectionController.deleteConnection);
};
