var connectionController = require('./connectionController.js');

module.exports = function (app) {
  app.post('/createconnection', connectionController.createConnection);
  app.delete('/deleteconnection', connectionController.deleteConnection);
  app.post('/getconnections', connectionController.getConnections);
  // app.post('/gc', connectionController.gc);
  // app.post('/cc', connectionController.cc);
};
