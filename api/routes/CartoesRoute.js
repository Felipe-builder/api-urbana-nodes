const { Router } = require('express');
const CartaoController = require('../controllers/CartaoController');

const router = Router();

router
    .get('/cartoes', CartaoController.pegaTodosCartoes)


module.exports = router