const express = require('express');
const router = express.Router();
const preOrderController = require('../controllers/PreOrdercontrollers');

// Rotas CRUD para PreOrder
router.post('/', preOrderController.createPreOrder); // Criar
router.get('/', preOrderController.getPreOrders); // Listar
router.put('/:id', preOrderController.updatePreOrder); // Atualizar
router.delete('/:id', preOrderController.deletePreOrder); // Remover

module.exports = router;
