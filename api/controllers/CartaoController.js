const database = require('../models');

class CartaoController {
    static async pegaTodosCartoes(req, res){
        try {
            const todosCartoes = await database.Cartoes.findAll();
            return res.status(200).json(todosCartoes);
        } catch (error){
            return res.status(500).json(error.message);
        }
    }
}

module.exports = CartaoController;