const express = require('express');
const router = express.Router();
const remedioscontroller = require('../controllers/remedioscontrollers');

// Rotas CRUD
router.post('/remedios', remedioscontroller.createRemedio); // Criar remédio
router.get('/remedios', remedioscontroller.getRemedios); // Listar remédios
router.put('/remedios/:id', remedioscontroller.updateRemedio); // Atualizar remédio
router.delete('/remedios/:id', remedioscontroller.deleteRemedio); // Remover remédio

module.exports = router;
