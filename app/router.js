const express = require('express');

const router = express.Router();
const mainController = require('./controllers/mainController');

router.get('/', mainController.homePage);
router.get('/pokemon/:id', mainController.pokemonPage);
router.get('/types', mainController.typesPage);
router.get('/type/:id', mainController.pokemonByTypePage);

module.exports = router;
