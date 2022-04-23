const bodyParser = require('body-parser');
const cartoes = require('./CartoesRoute');
const usuarios = require('./UsuarioRoute')

module.exports = app => {
    app.use(
        bodyParser.json(),
        usuarios,
        cartoes
    )
}