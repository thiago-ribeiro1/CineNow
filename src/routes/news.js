const express = require("express");
const { scrapeNews, scrapeNewsDetails } = require("../services/newsScraper");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const news = await scrapeNews();
    res.json(news);
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao obter notícias");
  }
});

router.get("/details", async (req, res) => {
  try {
    const { url } = req.query;
    if (!url) {
      return res.status(400).send("Parâmetro 'url' é obrigatório");
    }

    const details = await scrapeNewsDetails(url);

    if (!details) {
      return res.status(500).send("Erro ao obter detalhes da notícia");
    }

    res.json(details);
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao obter detalhes da notícia");
  }
});

module.exports = router;
