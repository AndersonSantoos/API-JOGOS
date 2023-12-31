const express = require("express");
const router = express.Router();
const controller = require("./controller/controller"); // Importe o controlador

/**
 * @swagger
 * tags:
 *   name: Jogos
 *   description: Operações relacionadas a jogos
 */

/**
 * @swagger
 * /:
 *   get:
 *     summary: Lista todos os jogos.
 *     tags: [Jogos]
 *     responses:
 *       200:
 *         description: Lista de jogos recuperada com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Jogo'
 */

// Rota para listar jogos
router.get("/", controller.listarJogos);

/**
 * @swagger
 * /:
 *   post:
 *     summary: Adiciona um novo jogo.
 *     tags: [Jogos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Jogo'
 *     responses:
 *       201:
 *         description: Jogo adicionado com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Jogo'
 *       400:
 *         description: Dados inválidos. As informações do jogo são inválidas.
 */

// Rota para adicionar um novo jogo
router.post("/", controller.adicionarJogo);

/**
 * @swagger
 * /{id}:
 *   put:
 *     summary: Atualiza um jogo existente.
 *     tags: [Jogos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           format: int64
 *         description: ID do jogo a ser atualizado
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Jogo'
 *     responses:
 *       200:
 *         description: Jogo atualizado com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Jogo'
 *       404:
 *         description: Jogo não encontrado.
 */

// Rota para atualizar um jogo
router.put("/:id", controller.atualizarJogo);

/**
 * @swagger
 * /{id}:
 *   delete:
 *     summary: Exclui um jogo.
 *     tags: [Jogos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           format: int64
 *         description: ID do jogo a ser excluído
 *     responses:
 *       200:
 *         description: Jogo excluído com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Jogo'
 *       404:
 *         description: Jogo não encontrado.
 */

// Rota para excluir um jogo
router.delete("/:id", controller.excluirJogo);

module.exports = router;


module.exports = router;
