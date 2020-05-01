const express = require('express');
const app = express();
const knex = require('./database');

app.get('/uf', (req, res) => {
  knex('UF').then(results => res.json(results));
});

app.listen(5555, () => { console.log('Server running....') });
