const express = require('express');
const router = express.Router();
const preparadorController = require('../controllers/preparadorcontroller');

// Rotas CRUD para Preparador
router.post('/', preparadorController.createPreparador); // Criar
router.get('/', preparadorController.getPreparadores); // Listar
router.put('/:id', preparadorController.updatePreparador); // Atualizar
router.delete('/:id', preparadorController.deletePreparador); // Remover

module.exports = router;
