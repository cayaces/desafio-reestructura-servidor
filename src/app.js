const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
//config para .env
const config = require("./config/config.js")
console.log(config)

const app= express()
/*
mongoose.connect("mongodb+srv://coderClau:7725AmorCODER@coderclau.lgoc83w.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});*/

app.use(bodyParser.json())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const productsRouter = require("./routes/products.js")
const usersRouter = require("./routes/users.js")
//const cartsRouter = require("./routes/carts.js")

app.use("/products", productsRouter)
app.use("/users", usersRouter)
//app.use("/carts", cartsRouter)

/*
app.listen(PORT, () => {
    console.log(`Servidor corriendo en portal ${PORT}`)
})
*/