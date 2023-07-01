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

  async getPokemonTypesByNumero(numero) {
    const result = await client.query(
      'SELECT * FROM type INNER JOIN pokemon_type ON type.id = pokemon_type.type_id WHERE pokemon_type.pokemon_numero = $1',
      [numero]
    );
    return result.rows;
  },
  async getAllTypes() {
    const result = await client.query('SELECT * FROM type ORDER BY name ASC');
    return result.rows;
  },
  async getPokemonByTypeId(typeId) {
    const result = await client.query(
      'SELECT * FROM pokemon INNER JOIN pokemon_type ON pokemon.numero = pokemon_type.pokemon_numero WHERE pokemon_type.type_id = $1',
      [typeId]
    );
    return result.rows;
  },
};

module.exports = dataMapper;
