const usersData = require("../persistence/usersData.js")

function getAllUsers() {
    return usersData.getAllUsers()

}

function createUser(newUser) {
    usersData.createUsers(newUser)
}

module.exports = {
    getAllUsers,
    createUser
}