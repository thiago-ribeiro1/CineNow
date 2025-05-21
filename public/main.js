// Carregar os filmes do servidor e exibi-los na página
fetch("/movies")
  .then((response) => response.json())
  .then((data) => {
    const container = document.querySelector(".movies-container");
    container.innerHTML = "";
    data.forEach((movie) => {
      container.innerHTML += `
        <div class="box">
          <div class="box-img">
            <img src="${movie.image}" alt="${movie.title}">
          </div>
          <h3>${movie.title}</h3>
          <span>${movie.year || ""}</span>
        </div>
      `;
    });
  })
  .catch((error) => {
    console.error("Erro ao carregar filmes:", error);
  });

document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector("#menu-icon");
  const navbar = document.querySelector(".navbar");
  const header = document.querySelector("header");

  menu.addEventListener("click", () => {
    menu.classList.toggle("bx-x");
    navbar.classList.toggle("active");
  });

  window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0);
    menu.classList.remove("bx-x");
    navbar.classList.remove("active");
  });
});
