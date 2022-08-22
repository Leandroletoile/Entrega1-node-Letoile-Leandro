
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args))


async function getAllProducts() {
    try {
        const data = await fetch(`https://fakestoreapi.com/products`)
        return data.json()
    } catch (error) {
        console.log(error)
    }
}

async function getProductsById(id) {
    try {
        const data = await fetch(`https://fakestoreapi.com/products/${id}`)
        return data.json()
    } catch (error) {
        console.log(error)
    }
}

async function getAllCategories() {
    try {
        const data = await fetch(`https://fakestoreapi.com/products/categories`)
        return data.json()
    } catch (error) {
        console.log(error)
    }
}

async function getProductsByCategory(name) {
    try {
        const data = await fetch(`https://fakestoreapi.com/products/category/${name}`)
        return data.json()
    }
    catch (error) {
        console.log(error)
    }
}


let products = {
    getAllProducts,
    getProductsById,
    getAllCategories,
    getProductsByCategory,
}

module.exports = products;

