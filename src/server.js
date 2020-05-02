const express = require('express');
const app = express();
const knex = require('./database');

app.get('/users', (req, res) => {
  knex('users')
    .then(results => res.json(results))
    .catch(error => console.log(error));
});

app.listen(5555, () => { console.log('Server running....') });
