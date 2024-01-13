const mongoose = require("mongoose")

const productcollection ="Products"
const productschema = new mongoose.schema({
    name: String,
    description: String,
    price: String,

})

const productModel = mongoose.model(productcollection, productschema)

export default productModel