import conexao from "../config/conexao.js";

const MusicaSchema = new conexao.Schema({
 titulo: String,
 duracao: String,
 artista: String,
 genero: String,
 album: String,
 ano: Number 
});

const Musica = conexao.model("Musica", MusicaSchema);

export default Musica;