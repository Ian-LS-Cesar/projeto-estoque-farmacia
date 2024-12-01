const express = require('express');
const router = express.Router();
const preOrderController = require('../controllers/PreOrdercontrollers');

// Rotas CRUD para PreOrder
router.post('/preorders', preOrderController.createPreOrder); // Criar
router.get('/preorders', preOrderController.getPreOrders); // Listar
router.put('/preorders/:id', preOrderController.updatePreOrder); // Atualizar
router.delete('/preorders/:id', preOrderController.deletePreOrder); // Remover

module.exports = router;
