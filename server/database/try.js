var User = require('./users/user');
var Users = require('./users/users');
var Card = require('./cards/card');
var Cards = require('./cards/cards');
// var Connection = require('./connections/connection');
// var Connections = require('./connections/connections');




new User({email: 'testing1@email.com'})
.fetch()
.then(function(user) {
  return user.comparePassword('12345');
})
.then(function(result) {
  console.log('result is', result);
})
// .catch(function(err) {
//   console.log(new Error(err));
// });

