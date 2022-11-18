const { UserServices } = require('../services')
const userRegister = async (req, res, next) => {
    try {
        const newUser = req.body
        const result = await UserServices.create(newUser)
        res.status(201).json(result)
        /* res.status(201).json({ message: 'Creado exitosamente' }) */
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: 'Error al crear el usuario',
        })
    }
}

module.exports = {
    userRegister,
}
