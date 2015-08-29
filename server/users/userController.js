var User = require('./userModel.js');

module.exports = {
  all: function (req, res) {
    console.log("all routes");
    res.json({
      message: "all pages end here"
    });
  },
  api: function (req, res) {
    console.log("api route");
    res.json({
      message: 'hello message'
    });
  }
};
