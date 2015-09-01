var User = require('../database/users/user.js');
var Users = require('../database/users/users.js');
var Promise = require("bluebird");

var userRoutes = {
  signin: function (req, res) {
    console.log("all routes");
    res.json({
      message: "user get message"
    });
  },
  signup: function (req, res) {
    return new Promise(function (resolve, reject) {
      console.log(17, req.body.email);
      Users.query({
        where: {
          email: req.body.email
        }
      }).fetchOne().then(function (user) {
        console.log(21, user);
        if (user) {
          res.end("Email already exists");
        } else {
          return new User({
            email: req.body.email,
            password: req.body.password
          }).save().then(function (newUser) {
            console.log(20, newUser);
            res.end(JSON.stringify(newUser));
          }).catch(function (err) {
            console.log(new Error(err));
            res.end(JSON.stringify(err));
          })
        }
      })
    });
  }
}
module.exports = userRoutes;
