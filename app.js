const express = require("express")
const bodyParser = require("body-parser")
const app= express()

const PORT = 8080
app.use(bodyParser.json())
app.use(express.json())
//linea q lee postman
app.use(express.urlencoded({ extended: true }))

//Importa las rutas
const productsRouter = require("./routes/products")
const usersRouter = require("./routes/users")

app.use("/products", productsRouter)
app.use("/users", usersRouter)


app.listen(PORT, () => {
    console.log(`Servidor corriendo en portal ${PORT}`)
})