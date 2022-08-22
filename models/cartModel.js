
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args))

async function getAllCarts() {
    try {
        let data = await fetch('https://fakestoreapi.com/carts')
        return data.json()
    } catch (error) {
        console.log(error)
    }
}

async function getCartsById(id) {
    try {
        let data = await fetch(`https://fakestoreapi.com/carts/${id}`)
        return data.json()
    } catch (error) {
        console.log(error)
    }
}

let carts = {
    getAllCarts,
    getCartsById
}

module.exports = carts;
