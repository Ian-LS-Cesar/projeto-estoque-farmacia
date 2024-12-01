const express = require('express');
const router = express.Router();
const estadoController = require('../controllers/estadoController');

// Rotas CRUD para Estado
router.post('/estados', estadoController.createEstado); // Criar
router.get('/estados', estadoController.getEstados); // Listar
router.put('/estados/:id', estadoController.updateEstado); // Atualizar
router.delete('/estados/:id', estadoController.deleteEstado); // Remover

module.exports = router;
