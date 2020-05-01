
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { user_name: 'Joao'},
        { user_name: 'Pedro'},
        { user_name: 'Maria'}
      ]);
    });
};
