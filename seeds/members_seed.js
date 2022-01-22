const faker = require('@faker-js/faker');

function baseRandom(lower, upper) {
  return lower + Math.floor(Math.random() * (upper - lower + 1));
}

function arraySample(array) {
  const length = array.length;
  return length ? array[baseRandom(0, length - 1)] : undefined;
}

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('subscriptions')
    .del()
    .then(function() {
      const subscriptions = [
        {
          name: 'Silver',
          price: 50.0,
          created_at: knex.fn.now(),
          updated_at: knex.fn.now()
        },
        {
          name: 'Gold',
          price: 75.0,
          created_at: knex.fn.now(),
          updated_at: knex.fn.now()
        },
        {
          name: 'Platinum',
          price: 99.0,
          created_at: knex.fn.now(),
          updated_at: knex.fn.now()
        }
      ];

      return knex('subscriptions').insert(subscriptions);
    })
    .then(function() {
      return knex('members')
        .del()
        .then(function() {
          return knex.table('subscriptions').pluck('id');
        })
        .then(function(subscription_ids) {
          const members = Array.from({ length: 10 }, () => ({
            name: faker.name.findName(),
            email: faker.internet.email(),
            phone: faker.phone.phoneNumber(),
            subscription_id: arraySample(subscription_ids),
            created_at: knex.fn.now(),
            updated_at: knex.fn.now()
          }));

          return knex('members').insert(members);
        });
    });
};
