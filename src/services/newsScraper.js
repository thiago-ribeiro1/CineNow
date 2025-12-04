const axios = require("axios");
const cheerio = require("cheerio");

async function scrapeNews() {
  try {
    const response = await axios.get(
      "https://www.adorocinema.com/noticias/filmes/"
    );
    const html = response.data;
    const $ = cheerio.load(html);

    const news = [];

    $(".news-card, .news-card-article, .article-card").each(
      (index, element) => {
        const title =
          $(element).find(".meta-title-link").text().trim() ||
          $(element).find("h2 a").text().trim() ||
          $(element).find("h3 a").text().trim();

        const rawSrc =
          $(element).find("img").attr("data-src") ||
          $(element).find("img").attr("src");

        const imageUrl = rawSrc?.startsWith("//")
          ? `https:${rawSrc}`
          : rawSrc;

        let detailsUrl =
          $(element).find("a").attr("href") ||
          $(element).find(".meta-title-link").attr("href");

        if (detailsUrl && detailsUrl.startsWith("/")) {
          detailsUrl = `https://www.adorocinema.com${detailsUrl}`;
        }

        if (title && imageUrl && detailsUrl) {
          news.push({
            title,
            imageUrl,
            detailsUrl,
          });
        }
      }
    );

    return news;
  } catch (error) {
    console.error("Erro ao fazer scraping de notícias:", error.message);
    return [];
  }
}

async function scrapeNewsDetails(url) {
  try {
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);

    const title =
      $("h1").first().text().trim() ||
      $('h1[itemprop="headline"]').text().trim();

    const rawSrc =
      $(".thumbnail img").attr("src") ||
      $(".article-picture img").attr("src") ||
      $("article img").first().attr("src");

    const imageUrl = rawSrc?.startsWith("//")
      ? `https:${rawSrc}`
      : rawSrc;

    // Seletores possíveis para o conteúdo da matéria.
    const contentHtml =
      $(".article-content").html() ||
      $(".news-article").html() ||
      $("article").first().html();

    return {
      title,
      imageUrl,
      contentHtml,
      originalUrl: url,
    };
  } catch (error) {
    console.error("Erro ao detalhar notícia:", error.message);
    return null;
  }
}

module.exports = {
  scrapeNews,
  scrapeNewsDetails,
};
