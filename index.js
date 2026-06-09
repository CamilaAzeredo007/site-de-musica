import express from "express";
import Genero from './models/Genero.js';
import Musica from './models/Musica.js';
import Artista from './models/Artista.js';

const app = express();
const PORT = 3000;

// Configura o EJS como motor de views
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// pasta onde ficam os arquivos .ejs
app.set("views", "./views"); 

//Liberar acesso a pasta public
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(express.static(__dirname + '/public'))


app.get("/", (req, res) => {
  res.render("index");
});

app.get("/artistas/lst", async (req, res) => {
  const artistas = await Artista.find();
  res.render("artistas/lstartistas", {artistas});
});

app.get("/artistas/add", (req, res) => {
  res.render("artistas/addartistas")
});

app.post("/artistas/add", async (req, res) => {
  const nome = req.body.nome;
  const pais = req.body.pais;
  const anoInicio = req.body.anoInicio;
  await Artista.create({nome, pais, anoInicio})
  res.render("artistas/addartistasok")
});

//!DELETE
app.get('/artistas/del/:id', async (req, res) => {

const artista = await Artista.findByIdAndDelete(req.params.id)

res.redirect("/artistas/lst")

})

//!GENEROS
/*app.get("/generos", (req, res) => {
  res.render("generos");
});

app.post("/listadegeneros", (req, res) => {
  const nome = req.body.nome;
  const descricao = req.body.descricao;

  res.render("generos", {nome, descricao})
});*/

app.get("/generos/lst", async (req, res) => {
  const generos = await Genero.find();
  res.render("generos/lst", {generos});
});

app.get("/generos/add", (req, res) => {
  res.render("generos/add");
});

app.post("/generos/add", async (req, res) => {
  const nome = req.body.nome;
  const descricao = req.body.descricao;
  await Genero.create({nome, descricao})
  res.render("generos/addok");
});

//!DELETE
app.get('/generos/del/:id', async (req, res) => {

const genero = await Genero.findByIdAndDelete(req.params.id)

res.redirect("/generos/lst")

})

//!MUSICAS
/*app.get("/musicas", (req, res) => {
  res.render("musicas");
});

app.post("/listademusicas", (req, res) => {
  const titulo = req.body.titulo;
  const artista = req.body.artista;
  const genero = req.body.genero;
  const ano = req.body.ano;
  const duracao = req.body.duracao;

  res.render("musicas", {titulo, artista, genero, ano, duracao})
});*/

app.get("/musicas/lst", async (req, res) => {
  const musicas = await Musica.find()
  res.render("musicas/lstmusica", {musicas});
});

app.get("/musicas/add", (req, res) => {
  res.render("musicas/addmusica");
});

app.post("/musicas/add", async (req, res) => {
  const {titulo, duracao, artista, genero, ano} = req.body;
  await Musica.create({titulo, duracao, artista, genero, ano})
  res.render("musicas/addmusicaok");
});

//!DELETE
app.get('/musicas/del/:id', async (req, res) => {

const musica = await Musica.findByIdAndDelete(req.params.id)

res.redirect("/musicas/lst")

})



app.get("/cadastroartistas", (req, res) => {
  res.render("cadastroartistas");
});

app.post("/cadastroartistas", (req, res) => {
  const nome = req.body.nome;
  const pais = req.body.pais;
  const anoInicio = req.body.anoInicio;

  res.render("cadastrook", {nome, pais, anoInicio})
});

app.get("/cadastrogeneros", (req, res) => {
  res.render("cadastrogeneros");
});

app.post("/cadastrogeneros", (req, res) => {
  const nome = req.body.nome;
  const descricao = req.body.descricao;

  res.render("cadastrogenerosok", {nome, descricao})
});

app.get("/cadastromusicas", (req, res) => {
  res.render("cadastromusicas");
});

app.post("/cadastromusicas", (req, res) => {
  const titulo = req.body.titulo;
  const artista = req.body.artista;
  const genero = req.body.genero;
  const anoLanc = req.body.anoLanc;
  const duracao = req.body.duracao;

  res.render("cadastromusicasok", {titulo, artista, genero, anoLanc, duracao})
});

app.listen(PORT, ()=>{
 console.log(
    `Servidor rodando em http://localhost:${PORT}`)
});
