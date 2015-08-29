var User = require('./users/user');
var Users = require('./users/users');
var Card = require('./cards/card');
var Cards = require('./cards/cards');
// var Connection = require('./connections/connection');
// var Connections = require('./connections/connections');

new User({email: 'testing@email.com', password: '1234'})
.fetch()
.then(function(user) {
  return new Card({
    firstName: 'Kiri',
    lastName: 'S-G',
    email: user.get('email')
    // userID: user.get('id')
  }).save();
})
.then(function(card) {
  console.log(card);
});

