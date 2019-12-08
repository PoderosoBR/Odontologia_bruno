'use strict'

const User = use('App/Models/Professor')
const User2 = use('App/Models/Usuario')

class ProfessorController {


    async cadastroProfessor({ request }) {
        const userData = request.only(['nome', 'email', 'usuarios_id'])
        const user = await User.create(userData)
        return user
    }

    async lista({ request, params }) {
        const order = await User2.query().innerJoin('professors', function () {
            this.on('usuarios.id', 'professors.usuarios_id')
        })
            .where('usuarios_id', params.id)
            .fetch()
       
        return order
    }

   

    async atualizarProfessor({ request, params }) {
        const user = await User.findBy('nome', params.nome)
        const userData = request.only(['nome', 'email'])
        user.merge(userData)
        await user.save()
        return user
    }

    async buscarProfessor({ params }) {
        const user = await User
            .query()
            .where('usuario_id', '=', ('id', params.id))
            .fetch()
        return user
    }



    async listarProfessor({ }) {
        const user = await User
            .query()
            .fetch()
        return user
    }

    async listarIdProfessor({ params }) {
        const user = await User
            .query()
            .where('nome', '=', ('nome', params.nome))
            .fetch()
        return user
    }

    async buscarProfessor({ params }) {
        const user = await User
            .query()
            .where('nome', '=', ('nome', params.nome))
            .fetch()
        return user
    }


}

module.exports = ProfessorController
