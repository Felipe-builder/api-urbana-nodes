const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const port = 3000;

app.listen(port, () => console.log(`O servidor está rodando na porta ${port}`));

module.exports = app;