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

class ProfessorSeeder {
  async run() {
    const user = await Factory.model('App/Models/Professor').create()
    const usuario = await Database.table('professors')

  }
}

module.exports = ProfessorSeeder
