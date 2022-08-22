
const getMostExpensivesByCategory = (categories) => {

    const mostExpensive = categories.map((category) => {

        let productsExpensive = category.products.reduce((previousValue, currentValue) => {

            let expensive
            if (previousValue.price > currentValue) {
                expensive = previousValue
            } else {
                expensive = currentValue
            }
            return expensive
        })
        return {
            category: category.category,
            productExp: productsExpensive
        }
    })

    return mostExpensive
}

module.exports = getMostExpensivesByCategory;