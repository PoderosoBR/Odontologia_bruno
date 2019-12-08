'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Hash = use('Hash')


Factory.blueprint('App/Models/Paciente', () => {
    return {
        nome: 'c',
        endereco: 'Pelotas',
        cpf: '03724542',
        email: 'bruno@lopes.com',
        contato: '9145845'

    }
})


