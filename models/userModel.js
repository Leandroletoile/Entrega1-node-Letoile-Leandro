
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args))


let getAllUsers = async () => {
    try {
        const data = await fetch('https://fakestoreapi.com/users')
        return await data.json()

    } catch (error) {
        console.log(error)
    }

}
let getUserById = async (id) => {
    try {
        const data = await fetch(`https://fakestoreapi.com/users/${id}`)
        return await data.json()
    } catch (error) {
        console.log(error)
    }
}

let getUsersFirts = async () => {
    try {
        const limit = 3
        const data = await fetch(`https://fakestoreapi.com/users?limit=${limit}`)
        return await data.json()
    } catch (error) {
        console.log(error)
    }
}

let users = {
    getAllUsers,
    getUsersFirts,
    getUserById
}

module.exports = users;

