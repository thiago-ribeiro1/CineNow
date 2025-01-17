
# 🎥 Filmes em Cartaz

Este é um projeto de frontend que utiliza um scraper para obter informações atualizadas sobre os filmes em cartaz no cinema, apresentando-as em uma interface visual e responsiva.

---

## 📋 Funcionalidades

- **Scraper Automatizado**: Coleta dados do site [AdoroCinema](https://www.adorocinema.com/filmes/numero-cinemas/), incluindo título, imagem e link para mais detalhes.
- **Interface Responsiva**: Exibe os filmes em um layout amigável para o usuário.
- **Tecnologias Utilizadas**:
  - Frontend: HTML, CSS e JavaScript.
  - Backend: Node.js com Express.
  - Scraping: Axios e Cheerio.

---

## 🚀 Como Rodar o Projeto

### Pré-requisitos

- Node.js instalado em sua máquina.

### Passo a Passo

1. Clone o repositório:
   ```bash
   git clone https://github.com/seuusuario/filmes-em-cartaz.git
   cd filmes-em-cartaz
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor:
   ```bash
   node app.js
   ```

4. Acesse o projeto em seu navegador:
   ```bash
   http://localhost:3000
   ```

---

## 🗂 Estrutura do Projeto

```
├── public/
│   └── index.html       # Página principal
│   └── style.css        # Estilos da página
├── routes/
│   └── movies.js        # Rota para obter os filmes
├── services/
│   └── scraper.js       # Lógica de scraping
├── app.js               # Configuração do servidor Express
├── package.json         # Gerenciamento de dependências
```

---

## 🔍 Pré-visualização

Abaixo está uma prévia da interface do projeto:

![Filmes em Cartaz Preview](https://user-images.githubusercontent.com/seuusuario/preview.png)

---

## 🤝 Contribuição

1. Faça um fork do projeto.
2. Crie sua feature branch (`git checkout -b feature/nova-feature`).
3. Faça commit das alterações (`git commit -am 'Adiciona nova feature'`).
4. Faça push para a branch (`git push origin feature/nova-feature`).
5. Crie um Pull Request.

---

## 📝 Licença

Este projeto está sob a licença [MIT](https://opensource.org/licenses/MIT).

---

## 📬 Contato

- **E-mail**: thiago@email.com  
- **GitHub**: [seuusuario](https://github.com/seuusuario)
