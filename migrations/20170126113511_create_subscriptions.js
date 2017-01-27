
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('subscriptions', function (table) {
      table.increments();
      table.string('name');
      table.decimal('price');
      table.timestamps();
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('subscriptions')
  ]);
};
