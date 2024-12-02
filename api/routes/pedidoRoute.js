const express = require('express');
const router = express.Router();
const pedidoController = require('../controllers/pedidoController');

// Rotas CRUD para Pedido
router.post('/', pedidoController.createPedido); // Criar
router.get('/', pedidoController.getPedidos); // Listar
router.put('/:id', pedidoController.updatePedido); // Atualizar
router.delete('/:id', pedidoController.deletePedido); // Remover

module.exports = router;
