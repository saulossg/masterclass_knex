
const knex = require('../database');

module.exports = {
  async index(req, res) {
      const result = await knex('users');
      return res.json(result);
  }
  ,async create(req, res, next) {
   try {

    const { user_name } = req.body;

    const result = await knex('users').insert({
     user_name
    });

    return res.status(200).send();

   } catch (error) {
      next(error);
   }
  }
}