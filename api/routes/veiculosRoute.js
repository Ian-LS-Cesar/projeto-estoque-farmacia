const express = require('express');
const router = express.Router();
const veiculosController = require('../controllers/veiculoscontroller');

// Rotas CRUD para Veículos
router.post('/', veiculosController.createVeiculo);
router.get('/', veiculosController.getVeiculos);
router.put('/:id', veiculosController.updateVeiculo);
router.delete('/:id', veiculosController.deleteVeiculo);

module.exports = router;
