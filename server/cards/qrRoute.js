var qrController = require('./qrController.js');
/**
 * create routes for generating QR code
 */
module.exports = function (app) {
  app.get('/getQR', qrController.send);
};
