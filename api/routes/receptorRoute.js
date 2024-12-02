const express = require('express');
const router = express.Router();
const receptorController = require('../controllers/receptorcontroller');

// Rotas CRUD para Receptor
router.post('/', receptorController.createReceptor); // Criar
router.get('/', receptorController.getReceptores); // Listar
router.put('/:id', receptorController.updateReceptor); // Atualizar
router.delete('/:id', receptorController.deleteReceptor); // Remover

module.exports = router;
