const { Users } = require('../models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

class AuthServices {
    static async login(credentials) {
        try {
            const { email, password } = credentials
            const result = await Users.findOne({
                where: { email },
            })
            if (result) {
                const isValid = bcrypt.compareSync(password, result.password)
            }
        } catch (error) {
            throw error
        }
    }
    static genToken(data) {
        try {
            const token = jwt.sign(data, process.env.SECRET_KEY, {
                expiresIn: '1h',
                algorithm: 'HS512',
            })
            return token
        } catch (error) {
            throw error
        }
    }
}
