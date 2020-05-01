
exports.up = function(knex) {
  knex.schema.createTable('users', function(table) {
    table.increments('id');
    table.string('user_name');
  }).then(() => { console.log('Table create') });
};

exports.down = function(knex) {
 return knex.schema.dropTable('users');
};
