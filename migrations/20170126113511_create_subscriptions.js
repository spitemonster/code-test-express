exports.up = function(knex) {
  return knex.schema.createTable('subscriptions', function(table) {
    table.increments();
    table.string('name');
    table.decimal('price');
    table.timestamps();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('subscriptions');
};
