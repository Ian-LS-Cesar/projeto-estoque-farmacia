const express = require('express');
const router = express.Router();
const apoioController = require('../controllers/apoioController');

// Rotas CRUD para Apoio
router.post('/', apoioController.createApoio); // Criar
router.get('/', apoioController.getApoios); // Listar
router.put('/:id', apoioController.updateApoio); // Atualizar
router.delete('/:id', apoioController.deleteApoio); // Remover

module.exports = router;
