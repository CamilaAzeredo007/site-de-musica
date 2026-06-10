import conexao from "../config/conexao.js";

const AlbumSchema = new conexao.Schema({
 nome: String,
 artista: String,
 genero: String,
 descricao: String,
 anoLanc: Number 
});

const Album = conexao.model("Album", AlbumSchema);

export default Album;