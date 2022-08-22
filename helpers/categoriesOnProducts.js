
const productModel = require('../models/productModel')

 const grouper = async (categories) => {

    const categoriesAndProducts = await Promise.all(
        categories.map(async (category) => {
            return {
                category,
                products: await productModel.getProductsByCategory(category)
            }
        }))
    return categoriesAndProducts
}


module.exports = grouper;
