
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('members', function (table) {
      table.increments();
      table.string('name');
      table.string('email');
      table.string('phone');
      table.timestamps();
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('members')
  ]);
};
