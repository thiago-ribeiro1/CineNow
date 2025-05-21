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
});
