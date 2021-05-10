const express = require('express');
const productController = require('../controllers/product')

const router = express.Router();

router.get('/add-products', productController.getAddProducts);
router.post('/add-product', productController.postAddProduct);


//----------------------------export method 1
module.exports = router;

//----------------------------exportmethod 2
// module.exports = {
//     router: router,
//     someText: 'Some cool text
// }

//----------------------------export method 3
// exports.router = router;
// exports.someText = 'Some cool text'