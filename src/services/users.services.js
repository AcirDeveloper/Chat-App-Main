const Users = require('../models')

class UserServices {
    static async create(user) {
        try {
            const result = await User.create(user)
            return result
        } catch (error) {
            throw error
        }
    }
}

module.exports = UserServices
