const client = require('./clientPg');

const dataMapper = {
  async getAllPokemon() {
    const result = await client.query('SELECT * FROM pokemon ORDER BY numero ASC');
    return result.rows;
  },
};

module.exports = dataMapper;
