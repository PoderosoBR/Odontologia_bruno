'use strict'

const User = use('App/Models/Alunos')
const User2 = use('App/Models/Usuario')

class AlunosController {


    async cadastroAluno({ request }) {
        const userData = request.only(['nome', 'email', 'usuarios_id'])
        const user = await User.create(userData)
        return user
    }

    async lista({ request, params }) {
        const order = await User2.query().innerJoin('alunos', function () {
            this.on('usuarios.id', 'alunos.usuarios_id')
        })
            .where('usuarios_id', params.id)
            .fetch()
       
        return order
    }

   

    async atualizarAluno({ request, params }) {
        const user = await User.findBy('nome', params.nome)
        const userData = request.only(['nome', 'email'])
        user.merge(userData)
        await user.save()
        return user
    }

    async buscarAluno({ params }) {
        const user = await User
            .query()
            .where('usuario_id', '=', ('id', params.id))
            .fetch()
        return user
    }



    async listarAluno({ }) {
        const user = await User
            .query()
            .fetch()
        return user
    }

    async listarIdAluno({ params }) {
        const user = await User
            .query()
            .where('nome', '=', ('nome', params.nome))
            .fetch()
        return user
    }

    async buscarAluno({ params }) {
        const user = await User
            .query()
            .where('nome', '=', ('nome', params.nome))
            .fetch()
        return user
    }


}

module.exports = AlunosController
