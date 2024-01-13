const mongoose = require("mongoose")

const userCollection ="users"
const userSchema = new mongoose.schema({
    name: String,
    email: String,
    role: String,
    orders: [
        {
            type: mongoose.SchemaType.ObjectId,
            ref: "Orders"
        }
    ]
})

const userModel = mongoose.model(userCollection, userSchema)

export default userModel