const axios = require("axios");
const cheerio = require("cheerio");

async function scrapeMovies() {
  try {
    const response = await axios.get(
      "https://www.adorocinema.com/filmes/numero-cinemas/"
    );
    const html = response.data;
    const $ = cheerio.load(html);

    const movies = [];

    $(".entity-card").each((index, element) => {
      const title = $(element).find(".meta-title-link").text().trim();
      const rawSrc =
        $(element).find("img").attr("data-src") ||
        $(element).find("img").attr("src");
      const imageUrl = rawSrc?.startsWith("//") ? `https:${rawSrc}` : rawSrc;
      const detailsUrl = $(element).find(".meta-title-link").attr("href");

      if (title && imageUrl && detailsUrl) {
        movies.push({
          title,
          imageUrl,
          detailsUrl: `https://www.adorocinema.com${detailsUrl}`,
        });
      }
    });

    return movies;
  } catch (error) {
    console.error("Erro ao fazer scraping:", error.message);
    return [];
  }
}

module.exports = scrapeMovies;
