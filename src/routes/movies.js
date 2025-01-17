const express = require('express');
const scrapeMovies = require('../services/scraper.js');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const movies = await scrapeMovies();
    res.json(movies); // Retorna os filmes em formato JSON
  } catch (err) {
    res.status(500).send('Erro ao obter filmes');
  }
});

module.exports = router;
