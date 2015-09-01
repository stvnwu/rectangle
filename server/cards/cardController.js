var Promise = require("bluebird");
var cardRoutes = {
  cardGet: function (req, res) {
    console.log("all routes");
    res.json({
      message: "card get message"
    });
  },
  cardPost: function (req, res) {
    var p = new Promise(function (resolve, reject) {
      return res.json({
        message: "card post message"
      });
    });
  }
}
module.exports = cardRoutes;
