var qrController = require('./qrController.js');

module.exports = function (app) {
  app.get('/getQR', qrController.send);
};
