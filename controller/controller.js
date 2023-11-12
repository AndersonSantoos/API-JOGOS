const express = require("express");
const router = express.Router();
const model = require("../models/model"); // Importe o modelo de jogos

let lastJogoId = 0; // Variável para controlar o último ID utilizado para jogos

router.get("/", (req, res) => {
  const jogos = model.listarJogos(); // Use a função listarJogos do modelo
  res.json(jogos);
});

router.post("/", (req, res) => {
  const { nome, plataformas, genero, anoLancamento, preco, imagem } = req.body;

  // Incrementar o ID antes de criar um novo jogo
  lastJogoId++;
  const novoJogo = new model.Jogo(lastJogoId, nome, plataformas, genero, anoLancamento, preco, imagem);
  model.adicionarJogo(novoJogo);
  res.status(201).json(novoJogo);
});


router.put("/:id", (req, res) => {
  const id = req.params.id;
  const { nome, plataformas, genero, anoLancamento, preco, imagem } = req.body;

  const jogoAtualizado = model.atualizarJogo(id, nome, plataformas, genero, anoLancamento, preco, imagem);
  if (jogoAtualizado) {
      res.json(jogoAtualizado);
  } else {
      res.status(404).json({ error: 'Jogo não encontrado' });
  }
});


router.delete("/:id", (req, res) => {
  const id = req.params.id;

  const jogoExcluido = model.excluirJogo(id); // Use a função excluirJogo do modelo
  if (jogoExcluido) {
    res.json(jogoExcluido);
  } else {
    res.status(404).json({ error: 'Jogo não encontrado' });
  }
});

module.exports = router;
