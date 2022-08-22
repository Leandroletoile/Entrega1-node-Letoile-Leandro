
const productModel = require('../models/productModel')
const grouper = require('../helpers/categoriesOnProducts')
const getMostExpensivesByCategory = require('../helpers/mostExpensives')

const getAllProducts = async (req, res) => {
    try {
        let products = await productModel.getAllProducts();
        console.log(`All Products ${JSON.stringify(products)} at day ${req.today}`);
        res.status(200).send(products);
    } catch (error) {
        console.log(error)
    }
}

const productsById = async (req, res) => {
    try {
        let { id } = req.params
        let productById = await productModel.getProductsById(id);
        console.log(`TProducts By id ${JSON.stringify(productById)} at day ${req.today}`);
        res.status(200).send(productById);
    } catch (error) {
        console.log(error)
    }
}

const allCategories = async (req, res) => {
    try {
        let categories = await productModel.getAllCategories();
        console.log(`All categories ${JSON.stringify(categories)} at day ${req.today}`);
        res.status(200).send(categories);
    } catch (error) {
        console.log(error)
    }
}
const productsByCategory = async (req, res) => {
    try {
        let { name } = req.params
        let category = await productModel.getProductsByCategory(name);
        console.log(`Products By category ${JSON.stringify(category)} at day ${req.today}`);
        res.status(200).send(category);
    } catch (error) {
        console.log(error)
    }
}

const productsByCategories = async (__req, res) => {
    try {

        const categories = await productModel.getAllCategories()

        const productsAndCategories = await grouper(categories)

        res.send(productsAndCategories)

    } catch (error) {
        console.log(error)
    }
}

async function getPricesProduct(req, res) {

    const { order } = req.query

    try {
        let listPrices = await productModel.getAllProducts()
        let newPrices = listPrices.map(product => {
            return {
                id: product.id,
                title: product.title,
                price: product.price
            }
        })
        newPrices.sort((a, b) => a.price - b.price);
        if (order === 'desc') newPrices.reverse();
        console.log(`Prices By Product ${JSON.stringify(newPrices)} at day ${req.today}`);
        res.status(200).send(newPrices);
    }
    catch (error) {
        console.log(error)
    }
}

const productsExpensive = async (__req, res) => {

    try {
        const categories = await productModel.getAllCategories()

        const categoriesAndProducts = await grouper(categories)

        const mostExpensiveByCategory = getMostExpensivesByCategory(categoriesAndProducts)

        res.send(mostExpensiveByCategory)

    } catch (error) {

        console.log(error)
    }

}


const productController = {
    getAllProducts,
    productsById,
    allCategories,
    productsByCategory,
    productsByCategories,
    getPricesProduct,
    productsExpensive
}


module.exports = productController;