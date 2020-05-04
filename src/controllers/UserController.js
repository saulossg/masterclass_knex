
const knex = require('../database');

module.exports = {
  async index(req, res, next) {
      try {
        const result = await knex('users');
        return res.json(result);
      } catch (error) {
        next(error);
      }
  },async create(req, res, next) {
   try {

    const { user_name } = req.body;

    const result = await knex('users').insert({
     user_name
    });

    return res.status(200).send();

   } catch (error) {
      next(error);
   }
  },async update(req, res, next) {
    try {
      const { user_name } = req.body;
      const { id } = req.params;

      await knex('users')
            .update({ user_name })
            .where({ id });

      return res.send();

    } catch(error) {
      next(error);
    }
  },async delete(req, res) {

    const { id } = req.params;

    await knex('users')
          .where({ id })
          .del();

    return res.send();

  }
}