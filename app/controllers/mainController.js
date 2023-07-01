const dataMapper = require('../dataMapper');

const mainController = {
  // méthode pour la page d'accueil
  homePage: async (req, res) => {
    const pokedex = await dataMapper.getAllPokemon();
    if (!pokedex) {
      res.status(404).render('404');
    }
    console.log(pokedex);
    res.render('home', { pokedex });
  },
  // méthode pour la page de détail d'un pokemon
  pokemonPage: async (req, res) => {
    const { id } = req.params;
    const pokemon = await dataMapper.getPokemonById(id);
    const types = await dataMapper.getPokemonTypesByNumero(pokemon.numero);
    if (!pokemon) {
      res.status(404).render('404');
    }
    res.render('pokemonDetail', { pokemon, types });
  },
  // méthode pour la page de recherche par type
  typesPage: async (req, res) => {
    const types = await dataMapper.getAllTypes();
    if (!types) {
      res.status(404).render('404');
    }
    res.render('searchType', { types });
  },
  // méthode pour la page de recherche par type
  pokemonByTypePage: async (req, res) => {
    const { id } = req.params;
    const pokemonList = await dataMapper.getPokemonByTypeId(id);
    if (!pokemonList) {
      res.status(404).render('404');
    }
    res.render('pokemonByType', { pokemonList });
  },
};

module.exports = mainController;
