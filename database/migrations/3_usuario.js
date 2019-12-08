'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class usuarioSchema extends Schema {
  up () {
    this.create('usuarios', (table) => {                 // cria tabela chamada usuario
      table.increments('id').notNullable().unique()       // id é autoincrementado,não pode esta em braco, deve ser unico
      table.string('nome', 80).notNullable().unique()
      table.string('email', 254).notNullable().unique()
      table.string('password', 60).notNullable()
      table.string('categoria', 100).notNullable()
      table.timestamps()
  })
  }

  down () {
    this.drop('usuarios')
  }
}

module.exports = usuarioSchema
