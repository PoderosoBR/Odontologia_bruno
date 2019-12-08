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

class AnamneseSeeder {
  async run() {
    const user = await Factory.model('App/Models/Anamnese').create()
    const usuario = await Database.table('anamnese')

  }
}

module.exports = AnamneseSeeder
