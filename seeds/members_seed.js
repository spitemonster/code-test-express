var faker = require('faker');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('members').del()
    .then(function () {
      var inserts = [];
      for(var i = 0; i < 10; i++) {
        inserts.push(knex('members').insert({name: faker.name.findName(), email: faker.internet.email(), phone: faker.phone.phoneNumber(), created_at: knex.fn.now(), updated_at: knex.fn.now()}));
      }
      return Promise.all(inserts);
    });
};
