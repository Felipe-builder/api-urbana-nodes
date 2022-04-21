const bodyParser = require('body-parser');
const cartoes = require('./CartoesRoute');

module.exports = app => {
    app.use(bodyParser.json());
    app.use(cartoes)
}