async function fetchMovies() {
  try {
    const response = await fetch('/movies'); // Faz a requisição ao servidor
    if (!response.ok) throw new Error('Erro ao buscar filmes');
    
    const movies = await response.json(); // Converte a resposta em JSON
    renderMovies(movies); // Renderiza os filmes no HTML
  } catch (error) {
    console.error('Erro ao buscar filmes:', error);
    document.getElementById('movies-list').innerHTML = '<p>Erro ao carregar filmes</p>';
  }
}

function renderMovies(movies) {
  const moviesList = document.getElementById('movies-list');
  moviesList.innerHTML = ''; // Limpa o conteúdo anterior

  // Cria o contêiner principal (se não existir)
  if (!document.querySelector('.movies-container')) {
    const container = document.createElement('div');
    container.classList.add('movies-container'); // Adiciona a classe para Flexbox
    moviesList.appendChild(container);
  }

  // Adiciona cada filme no contêiner
  movies.forEach((movie) => {
    const movieItem = document.createElement('div');
    movieItem.classList.add('card'); // A classe card será usada para o estilo do filme

    movieItem.innerHTML = `
      <img src="${movie.imageUrl}" class="card-img-top" alt="${movie.title}" />
      <div class="card-body">
        <h5 class="card-title">${movie.title}</h5>
        <a href="${movie.detailsUrl}" target="_blank" class="btn btn-primary">Mais detalhes</a>
      </div>
    `;

    // Adiciona o item ao contêiner de filmes
    document.querySelector('.movies-container').appendChild(movieItem);
  });
}

// Chama a função ao carregar a página
document.addEventListener('DOMContentLoaded', fetchMovies);
