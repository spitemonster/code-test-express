exports.up = function(knex) {
  return knex.schema.table('members', function(table) {
    table.integer('subscription_id').references('subscriptions.id');
  });
};

exports.down = function(knex) {
  return knex.schema.table('members', function(table) {
    table.dropColumn('subscription_id');
  });
};
