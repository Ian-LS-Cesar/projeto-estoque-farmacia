const express = require('express');
const router = express.Router();
const veiculosController = require('../controllers/veiculoscontroller');

// Rotas CRUD para Veículos
router.post('/veiculos', veiculosController.createVeiculo);
router.get('/veiculos', veiculosController.getVeiculos);
router.put('/veiculos/:id', veiculosController.updateVeiculo);
router.delete('/veiculos/:id', veiculosController.deleteVeiculo);

module.exports = router;
