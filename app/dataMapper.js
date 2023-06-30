const client = require('./clientPg');

const dataMapper = {
  async getAllPokemon() {
    const result = await client.query('SELECT * FROM pokemon ORDER BY numero ASC');
    return result.rows;
  },

  async getPokemonById(id) {
    const result = await client.query('SELECT * FROM pokemon WHERE id = $1', [id]);
    return result.rows[0];
  },
};

module.exports = dataMapper;
