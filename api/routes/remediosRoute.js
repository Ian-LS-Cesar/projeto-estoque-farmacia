const express = require('express');
const router = express.Router();
const remedioscontroller = require('../controllers/remedioscontrollers');

// Rotas CRUD
router.post('/', remedioscontroller.createRemedio); // Criar remédio
router.get('/', remedioscontroller.getRemedio); // Listar remédios
router.put('/:id', remedioscontroller.updateRemedio); // Atualizar remédio
router.delete('/:id', remedioscontroller.deleteRemedio); // Remover remédio

module.exports = router;
