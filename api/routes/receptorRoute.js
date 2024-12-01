const express = require('express');
const router = express.Router();
const receptorController = require('../controllers/receptorcontroller');

// Rotas CRUD para Receptor
router.post('/receptores', receptorController.createReceptor); // Criar
router.get('/receptores', receptorController.getReceptores); // Listar
router.put('/receptores/:id', receptorController.updateReceptor); // Atualizar
router.delete('/receptores/:id', receptorController.deleteReceptor); // Remover

module.exports = router;
