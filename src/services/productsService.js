const productsData = require("../dao/productsData.js")

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