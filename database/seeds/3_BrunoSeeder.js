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

class BrunoSeeder {
  async run() {
    const user = await Factory.model('App/Models/Usuario').create()
    const usuario = await Database.table('usuario')

  }
}

module.exports = BrunoSeeder
