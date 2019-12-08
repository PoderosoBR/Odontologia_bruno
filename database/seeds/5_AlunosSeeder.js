'use strict'

/*
|--------------------------------------------------------------------------
| PacienteSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')

class AlunoSeeder {
  async run() {
    const user = await Factory.model('App/Models/Alunos').create()
    const usuario = await Database.table('alunos')

  }
}

module.exports = AlunoSeeder
