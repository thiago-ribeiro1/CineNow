const express = require('express');
const moviesRoute = require('./routes/movies');
const path = require('path');


const app = express();
const PORT = 3000;

// Middleware para servir arquivos estáticos
app.use(express.static('public'));

// Serve arquivos estáticos na pasta public
app.use(express.static(path.join(__dirname, 'public')));

// Rotas
app.use('/movies', moviesRoute);

// Inicializando o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
