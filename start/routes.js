'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')
const User = use('App/Models/User')


Route.get('/login', ({ view }) => {
  return view.render('login')
})

Route.get('/registro', ({ view }) => {
  return view.render('cadastro')
})


Route.get('/paciente', ({ view }) => {
  return view.render('paciente')
})


//login
Route.post('login', 'UserController.login').middleware('guest');

Route.get('categoria/:email', 'UserController.categoria')

Route.post('registro', 'UsuarioController.cadastro')
Route.get('usuario/listarIdUsuario/:id', 'UsuarioController.listarIdUsuario')


//paciente
Route.get('paciente/listarId/:nome', 'PacienteController.listarIdPaciente')

Route.get('paciente/listar', 'PacienteController.listarPaciente')

Route.get('paciente/nome/:nome', 'PacienteController.buscarPaciente')

Route.put('paciente/atualizar/:nome', 'PacienteController.atualizarPaciente')

Route.post('paciente/cadastrar', 'PacienteController.cadastroPaciente')



// aluno

Route.get('alunos/listar', 'AlunosController.listarAluno')
Route.post('Alunos/cadastrar', 'AlunosController.cadastroAluno')
Route.put('Alunos/atualizar/:nome', 'AlunosController.atualizarAluno')
Route.get('aluno/home/:id', 'AlunosController.lista')

//Professor

Route.get('Professor/listar', 'ProfessorController.listarProfessor')
Route.post('Professor/cadastrar', 'ProfessorController.cadastroProfessor')
Route.put('Professor/atualizar/:nome', 'ProfessorController.atualizarProfessor')
Route.get('Professor/home/:id', 'ProfessorController.lista')

//Anamnese


Route.get('Anamnese/listar', 'AnamneseController.listarAnamnese')
Route.post('Anamnese/cadastrar', 'AnamneseController.cadastroAnamnese')
Route.put('Anamnese/atualizar/:nome', 'AnamneseController.atualizarAnamnese')
Route.get('Anamnese/home/:id', 'AnamneseController.lista')


