'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Professor extends Model {
    professor() {
        return this.hasMany('App/Models/Usuario')
    }
}

module.exports = Professor
