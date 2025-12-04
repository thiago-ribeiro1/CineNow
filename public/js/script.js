document.addEventListener("DOMContentLoaded", async () => {
  const container = document.querySelector("#movies .movies-container");
  if (!container) return;

  try {
    const res = await fetch("/movies");
    const movies = await res.json();

    container.innerHTML = "";

    movies.forEach((movie) => {
      const box = document.createElement("div");
      box.className = "box";

      box.innerHTML = `
        <div class="box-img">
          <img src="${movie.imageUrl}" alt="${movie.title}">
        </div>
        <h3>${movie.title}</h3>
        <a href="${movie.detailsUrl}" target="_blank" class="watch-btn">Ver mais</a>
      `;

      container.appendChild(box);
    });
  } catch (err) {
    console.error("Erro ao carregar filmes:", err);
    container.innerHTML = "<p>Erro ao carregar filmes em cartaz.</p>";
  }

const newsContainer = document.querySelector("#news .news-container");

if (newsContainer) {
  try {
    const res = await fetch("/news");
    const newsList = await res.json();

    newsContainer.innerHTML = "";

    newsList.forEach((news) => {
      const card = document.createElement("div");
      card.className = "box news-card";

      card.innerHTML = `
        <div class="box-img">
          <img src="${news.imageUrl}" alt="${news.title}">
        </div>
        <h3>${news.title}</h3>
        <a href="${news.detailsUrl}" target="_blank" class="watch-btn">
          Veja mais
        </a>
      `;

      newsContainer.appendChild(card);
    });
  } catch (err) {
    console.error("Erro ao carregar notícias:", err);
    newsContainer.innerHTML = "<p>Erro ao carregar notícias.</p>";
  }
}
});

