var User = require('./connectionModel.js');
var Promise = require("bluebird");
var connectionRoutes = {
  connectionGet: function (req, res) {
    console.log("all routes");
    res.json({
      message: "connection get message"
    });
  },
  connectionPost: function (req, res) {
    var p = new Promise(function (resolve, reject) {
      return res.json({
        message: "connection post message"
      });
    });
  }
}
module.exports = connectionRoutes;
