var connectionController = require('./connectionController.js');

module.exports = function (app) {
  app.get('/', connectionController.connectionGet);
  app.post('/', connectionController.connectionPost);
};
