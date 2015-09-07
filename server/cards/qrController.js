var qr = require('qr-image');
var fs = require('fs');
var Promise = require("bluebird");

var outputQR = {
  send: function (req, res) {
    var email = req.body.cardEmail || req.param("cardEmail");
    console.log(7, "entering qr code send");
    obj = {
      "cardEmail": email
    };
    console.log(8, obj);
    return new Promise(function (resolve, reject) {
      var code = qr.image(JSON.stringify(obj), {
        type: 'svg'
      });
      res.type('svg');
      code.pipe(res);
    });
  }
}

module.exports = outputQR;
