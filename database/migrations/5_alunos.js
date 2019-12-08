'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class alunosSchema extends Schema {
  up () {
    this.create('alunos', (table) => {
        table.increments('id').unique()
        table.integer('usuarios_id', 10).notNullable().references('id').inTable('usuarios').unsigned()
        table.string('nome', 250).notNullable().unique()
        table.string('email', 250).notNullable().unique()

        table.timestamps()
    })
  }

  down () {
    this.drop('alunos')
  }
}

module.exports = alunosSchema
