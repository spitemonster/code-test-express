
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('members', function (table) {
      table.integer('subscription_id');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('members', function (table) {
      table.dropColumn('subscription_id');
    })
  ]);
};
