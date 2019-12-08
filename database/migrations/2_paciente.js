'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class pacienteSchema extends Schema {
  up () {
    this.create('pacientes', (table) => {
        table.increments('id').unique()
        table.string('nome', 250).notNullable().unique()
        table.string('email', 250).notNullable().unique()
        table.string('cpf', 250).notNullable().unique()
        table.string('endereco', 250).notNullable()
        table.string('contato', 250).notNullable()

        table.timestamps()
    })
  }

  down () {
    this.drop('pacientes')
  }
}

module.exports = pacienteSchema
