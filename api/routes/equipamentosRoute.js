const express = require('express');
const router = express.Router();
const equipamentosController = require('../controllers/equipamentoscontroller');

// Rotas CRUD para equipamentos
router.post('/', equipamentosController.createEquipamento); // Criar equipamento
router.get('/', equipamentosController.getEquipamentos); // Listar equipamentos
router.put('/:id', equipamentosController.updateEquipamento); // Atualizar equipamento
router.delete('/:id', equipamentosController.deleteEquipamento); // Remover equipamento

module.exports = router;
