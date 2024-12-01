const express = require('express');
const router = express.Router();
const pedidoController = require('../controllers/pedidoController');

// Rotas CRUD para Pedido
router.post('/pedidos', pedidoController.createPedido); // Criar
router.get('/pedidos', pedidoController.getPedidos); // Listar
router.put('/pedidos/:id', pedidoController.updatePedido); // Atualizar
router.delete('/pedidos/:id', pedidoController.deletePedido); // Remover

module.exports = router;
