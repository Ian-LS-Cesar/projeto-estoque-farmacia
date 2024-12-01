const express = require('express');
const router = express.Router();
const requisitanteController = require('../controllers/requisitantecontroller');

// Rotas CRUD para Requisitante
router.post('/', requisitanteController.createRequisitante); // Criar
router.get('/', requisitanteController.getRequisitantes); // Listar
router.put('/:id', requisitanteController.updateRequisitante); // Atualizar
router.delete('/:id', requisitanteController.deleteRequisitante); // Remover

module.exports = router;
