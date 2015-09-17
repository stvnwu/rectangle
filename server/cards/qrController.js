// imports qr-image module to generate qr images
var qr = require('qr-image');
var fs = require('fs');
var Promise = require("bluebird");

/**
 * outputQR 
 * @method :{send}
 */
var outputQR = {
  /**
   * @method: send generates QR code as svg image based on user card email
   * @param {object}: "req" request object passed to the server
   * @param {object} res response object returned to the client
   */
  send: function (req, res) {
    //assigns card email from the request or url string
    var email = req.body.cardEmail || req.param("cardEmail");
    console.log(7, "entering qr code send");
    obj = {
      "cardEmail": email
    };
    console.log(8, obj);
    return new Promise(function (resolve, reject) {
      //generates a QR code based on email 
      var code = qr.image(JSON.stringify(obj), {
        type: 'svg'
      });
      //sends qr code as a svg file
      res.type('svg');
      code.pipe(res);
    });
  }
}

module.exports = outputQR;
