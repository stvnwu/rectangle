var User = require('./userModel.js');
var Promise = require("bluebird");
var userRoutes = {
  userGet: function (req, res) {
    console.log("all routes");
    res.json({
      message: "user get message"
    });
  },
  userPost: function (req, res) {
    var p = new Promise(function (resolve, reject) {
      return res.json({
        message: "user post message"
      });
    });
  }
}
module.exports = userRoutes;
