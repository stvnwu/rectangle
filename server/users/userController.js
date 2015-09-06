var User = require('../database/users/user.js');
var Users = require('../database/users/users.js');
var Promise = require("bluebird");

/** 
 * userRoutes is an object that contains the routes for '/users' in our API
 */
var userRoutes = {
  /**
   * @function to sign the user in, comparing hashed passwords
   * @param {object} HTTP request object
   * @param {object} HTTP response object
   */
  signin: function (req, res) {
    return new Promise(function (resolve, reject) {
      return new User({
          email: req.body.email
        })
        .fetch()
        .then(function (user) {
          if (!user) {
            //Sending a 400 response code for wrong email/password requests
            // HERE we would redirect to signup
            // confer with front end
            res.status(400).send('email does not match');
          } else {
            user.comparePassword(req.body.password)
              .then(function (isMatch) {
                if (!isMatch) {
                  res.status(400).send('password does not match');
                }
                res.end(JSON.stringify(isMatch));
              }).catch(function (err) {
                console.log(err);
                res.status(400).send('password/email does not match');
              });
          }
        })
    })
    console.log("all routes");
    res.json({
      message: "user get message"
    });
  },
  /**
   * @function to sign the user up and hash the password
   * @param {object} HTTP request object
   * @param {object} HTTP response object
   */
  signup: function (req, res) {
    return new Promise(function (resolve, reject) {
      Users.query({
        where: {
          email: req.body.email
        }
      }).fetchOne().then(function (user) {
        if (user) {
          //Sending 422 response code if email already exists in DB
          res.status(422).send('email already exists');
        } else if (req.body.email !== "" && req.body.email.indexOf("@") !== -1 && req.body.email !== undefined) {
          console.log(62, req.body.email);
          console.log(37, "email provided");
          return new User({
            email: req.body.email,
            password: req.body.password,
            firstName: req.body.firstName,
            lastName: req.body.lastName
          }).save().then(function (newUser) {
            console.log(20, newUser);
            // res.end(JSON.stringify(newUser));
            res.end(newUser.get("email"));
          }).catch(function (err) {
            console.log(new Error(err));
            res.end(JSON.stringify(err));
          })
        } else {
          console.log(51, req.body);
          res.status(400).send('email is not provided/invalid');
        }
      })
    });
  }
}

module.exports = userRoutes;
