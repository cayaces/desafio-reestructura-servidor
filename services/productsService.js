const productsData = require("../persistence/productsData.js")

function getAllProducts() {
    return productsData.getAllProducts()

}

function createProducts(newProduct) {
    productsData.createProducts(newProduct)
}

module.exports = {
    getAllProducts,
    createProducts
}