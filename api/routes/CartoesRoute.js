const { Router } = require('express')
const CartaoController = require('../controllers/CartaoController')

const router = Router()

router
  .get('/cartoes', CartaoController.pegaTodosCartoes)
  .get('/cartoes/:id', CartaoController.pegaUmCartao)
  .post('/cartoes', CartaoController.criaCartao)
  .put('/cartoes/:id', CartaoController.atualizaCartao)
  .delete('/cartoes/:id', CartaoController.deletaCartao)


module.exports = router