const express = require('express');
const productController = require('../controllers/productController');

const router = express.Router();

router.get('/detail/:id', productController.dummy);
router.get('/create', productController.dummy);
router.post('/create', productController.dummy);
router.get('/edit', productController.dummy);
router.put('/edit', productController.dummy);
router.get('/', productController.dummy);

module.exports = router;