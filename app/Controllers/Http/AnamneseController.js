'use strict'

const User = use('App/Models/Anamnese')
const User2 = use('App/Models/Paciente')

class AnamneseController {


    async cadastroAnamnese({ request }) {
        const userData = request.only(['nome', 'email', 'pacientes_id','queija', 'historico_doenca','antecedentes'])
        const user = await User.create(userData)
        return user
    }

    async lista({ request, params }) {
        const order = await User2.query().innerJoin('Anamnese', function () {
            this.on('pacientes.id', 'Anamnese.pacientes_id')
        })
            .where('pacientes_id', params.id)
            .fetch()
       
        return order
    }

   

    async atualizarAnamnese({ request, params }) {
        const user = await User.findBy('nome', params.nome)
        const userData = request.only(['nome', 'email', 'pacientes_id','queija', 'historico_doenca','antecedentes'])
        user.merge(userData)
        await user.save()
        return user
    }

    async buscarAnamnese({ params }) {
        const user = await User
            .query()
            .where('pacientes_id', '=', ('id', params.id))
            .fetch()
        return user
    }



    async listarAnamnese({ }) {
        const user = await User
            .query()
            .fetch()
        return user
    }

    async listarIdAnamnese({ params }) {
        const user = await User
            .query()
            .where('nome', '=', ('nome', params.nome))
            .fetch()
        return user
    }

    async buscarAnamnese({ params }) {
        const user = await User
            .query()
            .where('nome', '=', ('nome', params.nome))
            .fetch()
        return user
    }


}

module.exports = AnamneseController
