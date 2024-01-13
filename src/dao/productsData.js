let products = []

module.exports = {
    getAllProducts: () => products,
    createProducts: (newProducts) => {
        products.push(newProducts)
    }
}