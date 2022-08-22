const cartModel = require('../models/cartModel');
const userModel = require('../models/userModel');


const AllCarts = async (req, res) => {
    try {
        let cartsAll = await cartModel.getAllCarts();
        console.log(`Three users firts ${JSON.stringify(cartsAll)} at day ${req.today}`);
        res.status(200).send(cartsAll);
    } catch (error) {
        console.log(error)
    }
}

const cartsById = async (req, res) => {
    try {
        let { id } = req.params
        let cart = await cartModel.getCartsById(id);
        console.log(`Three users firts ${JSON.stringify(cart)} at day ${req.today}`);
        res.status(200).send(cart);
    } catch (error) {
        console.log(error)
    }
}

const getBigCartsUsers = async (req, res) => {

    let carts = await cartModel.getAllCarts();
    const users = await userModel.getAllUsers()

    const bigCarts = carts.filter((cart) => {
        if (cart.products.length > 2) {
            const user = users.find((user) => user.id === cart.userId)
            console.log(user)
            cart.user = user.name
            return cart
        }
    })
    console.log(`Big carts ${JSON.stringify(bigCarts)} at day ${req.today}`);
    res.status(200).send(bigCarts);
}

const cartController = {
    getBigCartsUsers,
    AllCarts,
    cartsById
}

module.exports = cartController;

