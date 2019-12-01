exports.up = function(knex) {
  return knex.schema.createTable('members', function(table) {
    table.increments();
    table.string('name');
    table.string('email');
    table.string('phone');
    table.timestamps();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('members');
};
