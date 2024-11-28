const express = require('express');
const router = express.Router();
const equipamentosController = require('../controllers/equipamentoscontroller');

// Rotas CRUD para equipamentos
router.post('/equipamentos', equipamentosController.createEquipamento); // Criar equipamento
router.get('/equipamentos', equipamentosController.getEquipamentos); // Listar equipamentos
router.put('/equipamentos/:id', equipamentosController.updateEquipamento); // Atualizar equipamento
router.delete('/equipamentos/:id', equipamentosController.deleteEquipamento); // Remover equipamento

module.exports = router;
