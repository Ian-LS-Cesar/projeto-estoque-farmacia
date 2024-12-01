const express = require('express');
const router = express.Router();
const estoqueController = require('../controllers/estoqueController');


router.post('/', estoqueController.createEstoque);
router.get('/', estoqueController.getEstoque);
router.put('/:id', estoqueController.updateEstoque);
router.delete('/:id', estoqueController.deleteEstoque);

module.exports = router;