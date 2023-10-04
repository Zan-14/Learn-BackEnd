const http = require("http");
// after installing package superviilains
const supervillains = require("supervillains");
// after installing package superheroes
const superheroes = require("superheroes");
const hostname = "127.0.0.1";

// don't use existing port,
const port = 3003;

const server = http.createServer((req, res) => {
  const generateRandSuperVillain = supervillains.random();
  const generateRandSuperHero = superheroes.random();

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(
    `My supervillain is ${generateRandSuperVillain} vs my superhero is ${generateRandSuperHero}`
  );
  //   res.end("hello guys");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
