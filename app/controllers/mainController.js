const dataMapper = require('../dataMapper');

const mainController = {
  homePage: async (req, res) => {
    const pokedex = await dataMapper.getAllPokemon();
    if (!pokedex) {
      res.status(404).render('404');
    }
    console.log(pokedex);
    res.render('home', { pokedex });
  },
  pokemonPage: async (req, res) => {
    const { id } = req.params;
    const pokemon = await dataMapper.getPokemonById(id);
    if (!pokemon) {
      res.status(404).render('404');
    }
    res.render('pokemonDetail', { pokemon });
  },
};

module.exports = mainController;
