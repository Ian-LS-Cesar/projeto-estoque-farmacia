const express = require('express');
const router = express.Router();
const requisitanteController = require('../controllers/requisitantecontroller');

// Rotas CRUD para Requisitante
router.post('/requisitantes', requisitanteController.createRequisitante); // Criar
router.get('/requisitantes', requisitanteController.getRequisitantes); // Listar
router.put('/requisitantes/:id', requisitanteController.updateRequisitante); // Atualizar
router.delete('/requisitantes/:id', requisitanteController.deleteRequisitante); // Remover

module.exports = router;
