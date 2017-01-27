var faker = require('faker');
var _ = require('lodash');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('subscriptions').del().then(function () {
    var subscriptions = [
      {
        name: "Silver",
        price: 50.00,
        created_at: knex.fn.now(),
        updated_at: knex.fn.now()
      },
      {
        name: "Gold",
        price: 75.00,
        created_at: knex.fn.now(),
        updated_at: knex.fn.now()
      },
      {
        name: "Platinum",
        price: 99.00,
        created_at: knex.fn.now(),
        updated_at: knex.fn.now()
      }
    ];
    var inserts = subscriptions.map(function(subscription) {
      return knex('subscriptions').insert(subscription);
    });
    return Promise.all(inserts);
  }).then(function() {
    return knex('members').del().then(function () {
      var members = [];
      for(var i = 0; i < 10; i++) {
        members.push(knex('members').insert({name: faker.name.findName(), email: faker.internet.email(), phone: faker.phone.phoneNumber(), created_at: knex.fn.now(), updated_at: knex.fn.now()}));
      }
      return Promise.all(members);
    });
  });
};
