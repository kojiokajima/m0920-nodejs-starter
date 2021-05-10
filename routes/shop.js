const express = require('express');
const productController = require('../controllers/product')

const router = express.Router();

router.get('/', productController.getProducts);

router.get('/show-product/:id', productController.getOneProductById)

router.post('/delete-product', productController.deleteProduct)

router.post('/cart', productController.postCart)

module.exports = router;