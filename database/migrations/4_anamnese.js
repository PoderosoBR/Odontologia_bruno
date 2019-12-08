'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AnamneseSchema extends Schema {
  up () {
    this.create('Anamnese', (table) => {
        table.increments('id').unique()
        table.integer('pacientes_id', 10).notNullable().references('id').inTable('pacientes').unsigned()
        table.string('nome', 250).notNullable().unique()
        table.string('queija', 250).notNullable().unique()
        table.string('historico_doenca', 250).notNullable().unique()
        table.string('antecedentes', 250).notNullable().unique()

        table.timestamps()
    })
  }

  down () {
    this.drop('Anamnese')
  }
}

module.exports = AnamneseSchema
