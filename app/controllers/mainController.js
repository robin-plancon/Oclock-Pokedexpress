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
};

module.exports = mainController;
