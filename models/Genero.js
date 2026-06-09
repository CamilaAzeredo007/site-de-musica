import conexao from "../config/conexao.js";

const GeneroSchema = new conexao.Schema({
  nome: String,
  descricao: String    
});

const Genero = conexao.model("Genero", GeneroSchema);

export default Genero;