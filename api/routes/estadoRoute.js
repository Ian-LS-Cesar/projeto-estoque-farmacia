const express = require('express');
const router = express.Router();
const estadoController = require('../controllers/estadoController');

// Rotas CRUD para Estado
router.post('/', estadoController.createEstado); // Criar
router.get('/', estadoController.getEstados); // Listar
router.put('/:id', estadoController.updateEstado); // Atualizar
router.delete('/:id', estadoController.deleteEstado); // Remover

module.exports = router;
