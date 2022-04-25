const { Router } = require('express')
const UsuarioController = require('../controllers/UsuarioController')

const router = Router()

router
  .get('/usuarios', UsuarioController.pegaTodosUsuario)
  .get('/usuarios/:id', UsuarioController.pegaUmUsuario)
  .post('/usuarios', UsuarioController.criaUsuario)
  .put('/usuarios/:id', UsuarioController.atualizaUsuario)
  .delete('/usuarios/:id', UsuarioController.apagaUsuario)
  .get('/usuarios/:id/restaura', UsuarioController.restauraUsuario)

module.exports = router