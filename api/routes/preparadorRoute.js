const express = require('express');
const router = express.Router();
const preparadorController = require('../controllers/preparadorcontroller');

// Rotas CRUD para Preparador
router.post('/preparadores', preparadorController.createPreparador); // Criar
router.get('/preparadores', preparadorController.getPreparadores); // Listar
router.put('/preparadores/:id', preparadorController.updatePreparador); // Atualizar
router.delete('/preparadores/:id', preparadorController.deletePreparador); // Remover

module.exports = router;
