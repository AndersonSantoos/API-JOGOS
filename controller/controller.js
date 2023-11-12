const model = require("../models/model");

// Função para listar jogos
exports.listarJogos = (req, res) => {
  const jogos = model.listarJogos();
  res.json(jogos);
};

// Função para adicionar um novo jogo
exports.adicionarJogo = (req, res) => {
  const {id, nome, plataformas, genero, anoLancamento, preco, imagem } = req.body;
  const novoJogo = new model.Jogo(id, nome, plataformas, genero, anoLancamento, preco, imagem);
  model.adicionarJogo(novoJogo);
  res.status(201).json(novoJogo);
};

// Função para atualizar um jogo
exports.atualizarJogo = (req, res) => {
  const id = req.params.id;
  const { nome, plataformas, genero, anoLancamento, preco, imagem } = req.body;
  const jogoAtualizado = model.atualizarJogo(id, nome, plataformas, genero, anoLancamento, preco, imagem);
  if (jogoAtualizado) {
    res.json(jogoAtualizado);
  } else {
    res.status(404).json({ error: 'Jogo não encontrado' });
  }
};

// Função para excluir um jogo
exports.excluirJogo = (req, res) => {
  const id = req.params.id;
  const jogoExcluido = model.excluirJogo(id);
  if (jogoExcluido) {
    res.json(jogoExcluido);
  } else {
    res.status(404).json({ error: 'Jogo não encontrado' });
  }
};
