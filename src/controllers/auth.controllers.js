const userLogin = async (req, res, next) => {
    try {
        const credentials = req.body
        const result = await AuthServices.authenticate(credentials)
        // ! res.status(200).json(result)
        // false -> Era contraseña invalida
        // null -> No existe el usuario
        // { isvalid, result }
        if (result) {
            const { firstname, lastname, email, id, phone } = result.result
            const user = { firstname, lastname, email, id, phone }
            const token = AuthServices.genToken(user)
            user.token = token
            res.json(...user)
            // ! res.json({ token, user })
        } else {
            res.status(400).json({ message: 'Invalid credentials' })
        }
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: 'Error al iniciar sesión',
        })
    }
}

module.exports = { userLogin }
