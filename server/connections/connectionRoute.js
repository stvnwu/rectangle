var connectionController = require('./connectionController.js');
/**
 * routes for connections and locations
 */
module.exports = function (app) {
  app.post('/createconnection', connectionController.createConnection);
  app.delete('/deleteconnection', connectionController.deleteConnection);
  app.post('/getconnections', connectionController.getConnections);
  app.post('/getlocations', connectionController.getLocations);
};
