'use strict'

const User = use('App/Models/Usuario')

class UsuarioController {

    async listarIdUsuario({ params }) {
        const user = await User
            .query()
            .where('id', '=', ('id', params.id))
            .fetch()
        return user
    }


    async login({ auth, request }) {
        const { email, password } = request.all();
        const token = await auth.attempt(email, password);

        return token;
    }

    async buscarResponsavel({ params }) {
        const user = await User
            .query()
            .where('id', '=', ('id', params.id))
            .fetch()
        return user
    }

    async categoria({ params }) {
        const user = await User
            .query()
            .where('email', '=', ('email', params.email))
            .fetch()
        return user
    }

    async cadastro({ request }) {
        const userData = request.only(['nome', 'email', 'password', 'categoria'])
        const user = await User.create(userData)
        return user
    }
}

module.exports = UsuarioController
