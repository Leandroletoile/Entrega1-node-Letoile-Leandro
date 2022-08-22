

// GET /prices debe devolver una lista de productos que tengan id, 
// titulo y precio de cada producto y que se pueda ordenar por precio y se pueda elegir si en orden ascendiente o descendiente
//  a traves de un query “order”       USAR REVERSE


// GET /expensive debe devolver todos los productos que sean los más caros de su categoria


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
    // getPricesProduct
}

module.exports = products;






// async function getPricesDesc() {
//     let listPrices = await fetch(`https://fakestoreapi.com/products`).then(res=>res.json()).then(json=>console.log(json))
    
//     let newPrices = listPrices.map(product =>({
//         id: product.id,
//         title: product.title,
//         price: product.price,
//     })) 
//     let returnDesc = newPrices.sort(( first , second )=> second.price - first.price)
//     return returnDesc
// }


// const result = allMoviesByRanking.sort((primero,segundo) => primero.rt_score - segundo.rt_score)

// async function getPeopleFromFilm(name) {
//     // Me devuelve un array de objetos que son las personas que aparecen en una pelicula
//     let film = await getFilmByName(name);
//     let peopleUrls = film.people;
//     let people = peopleUrls.map(async url => {
//         return await fetch(url).then(res => res.json());
//     })
//     return Promise.all(people);
// }
