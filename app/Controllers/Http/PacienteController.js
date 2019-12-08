'use strict'

const User = use('App/Models/Paciente')

class PacienteController {
    async atualizarPaciente({ request, params }) {
        const user = await User.findBy('nome', params.nome)
        const userData = request.only(['nome', 'endereco','cpf' ,'email','contato'])
        user.merge(userData)
        await user.save()
        return user
    }

    async cadastroPaciente({ request }) {
        const userData = request.only(['nome', 'endereco','cpf' ,'email','contato'])
        const user = await User.create(userData)
        return user
    }
  
  
  
    async listarPaciente({ }) {
        const user = await User
            .query()
            .fetch()
        return user
    }

    async listarIdPaciente({ params }) {
        const user = await User
            .query()
            .where('nome', '=', ('nome', params.nome))
            .fetch()
        return user
    }

    async buscarPaciente({ params }) {
        const user = await User
            .query()
            .where('nome', '=', ('nome', params.nome))
            .fetch()
        return user
    }

   
}

module.exports = PacienteController
