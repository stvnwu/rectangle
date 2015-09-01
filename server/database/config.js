/** 
 * @file Creates PostGreSQL schemas
*/
var path = require('path');

var knex = require('knex')({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: 'ksg', // change this out as needed
    password: '',
    database: 'ksg', // change this out as needed
    charset: 'utf8'
  }
});

var db = require('bookshelf')(knex);

db.knex.schema.hasTable('users').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('users', function (link) {
      link.increments('id').primary(),
      link.string('email', 40).unique(),
      link.string('password', 254),
      link.timestamps()
    }).then(function (table) {
      console.log('created table', table);
    });
  }
});

db.knex.schema.hasTable('cards').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('cards', function (link) {
      link.increments('id').primary(),
      link.string('firstName', 20),
      link.string('lastName', 20),
      link.string('email', 25),
      link.string('company', 18),
      link.string('jobTitle', 25),
      link.string('phone', 14),
      link.integer('userID').references('users.id'),
      link.timestamps()
    }).then(function (table) {
      console.log('created table', table);
    });
  }
});

db.knex.schema.hasTable('connections').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('connections', function (link) {
      link.increments('id').primary(),
      link.string('createdWhere', 30),
      link.string('QR', 25),
      link.integer('userID').references('users.id'),
      link.integer('cardID').references('cards.id'),
      link.timestamps()
    }).then(function (table) {
      console.log('created table', table);
    });
  }
});



module.exports = db;
