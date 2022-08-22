const express = require('express')
const router = express.Router();
const productController = require('./controllers/productController');
const userController = require('./controllers/userController');
const cartController = require('./controllers/cartController');
const dates = require('./middlewares/dates');
const errorHandler = require('./middlewares/errorHandler');


function helloWorld(req, res) {
    res.send('Hello World! Its: ' + req.today + ' of ' + req.month)
}

router.use([dates.myDate, dates.today, dates.month, dates.year, dates.displayDate]);

router.get('/', helloWorld)

router.get('/carts', cartController.AllCarts)
router.get('/carts/:id', cartController.cartsById)
router.get('/bigcart', cartController.getBigCartsUsers)

router.get('/products', productController.getAllProducts)
router.get('/products/bycategories', productController.productsByCategories)
router.get('/products/categories', productController.allCategories)
router.get('/products/expensive', productController.productsExpensive)
router.get('/products/prices', productController.getPricesProduct)
router.get('/products/categories/:name', productController.productsByCategory)
router.get('/products/:id', productController.productsById)

router.get('/users', userController.allUsers)
router.get('/users/firsts', userController.getUsersLimit)
router.get('/users/:id', userController.userById)

router.use(errorHandler.notFound);

module.exports = router;