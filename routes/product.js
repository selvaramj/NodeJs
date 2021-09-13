const express = require('express');
const router = express.Router();

const productController = require('../controllers/products');

router.get('/add-product', productController.getAddProduct);

router.post('/ordered-product', productController.setNewProduct);

router.get('/view-product', productController.showProduct);

module.exports = router;
