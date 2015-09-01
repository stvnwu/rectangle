var User = require('./users/user');
var Users = require('./users/users');
var Card = require('./cards/card');
var Cards = require('./cards/cards');
// var Connection = require('./connections/connection');
// var Connections = require('./connections/connections');

new User({email: 'testing@email.com', password: '1234'})
.save()
.then(function(user) {
  console.log(user.get('password'))
})
// .catch(function(err) {
//   console.log(new Error(err));
// });

