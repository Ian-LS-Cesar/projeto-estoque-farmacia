const express = require('express');
const router = express.Router();
const apoioController = require('../controllers/apoioController');

// Rotas CRUD para Apoio
router.post('/apoios', apoioController.createApoio); // Criar
router.get('/apoios', apoioController.getApoios); // Listar
router.put('/apoios/:id', apoioController.updateApoio); // Atualizar
router.delete('/apoios/:id', apoioController.deleteApoio); // Remover

module.exports = router;
