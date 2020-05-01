const knexfiles = require('../knexfile');
const knex = require('knex')(knexfiles['development']);

module.exports = knex;