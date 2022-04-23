const database = require('../models')

class CartaoController {
  static async pegaTodosCartoes(req, res){
    try {
      const todosCartoes = await database.Cartoes.findAll()
      return res.status(200).json(todosCartoes)
    } catch (error){
      return res.status(500).json(error.message)
    }
  }

  static async pegaUmCartao(req, res) {
    try {
      const { id } = req.params
      const cartao = await database.Cartoes.findOne({
        where: { 
          id : Number(id)
        }
      })
      return res.status(200).json(cartao)
    } catch (error) {
      return res.status(404).json(error.message)
    }
  }

  static async criaCartao(req, res) {
    const novoCartao = req.body
    try {
      const novoCartaoCriado = await database.Cartoes.create(novoCartao)
      return res.status(201).json(novoCartaoCriado)
    } catch(error) {
      return res.status(500).json(error.message)
    }
  }

  static async atualizaCartao(req, res) {
    const dadosCartao = req.body
    const { id } = req.params
    try {
      await database.Cartoes.update(dadosCartao, {
        where: { id: Number(id)}
      })
      const cartaoAtualizado = await database.Cartoes.findOne({
        where: { 
          id : Number(id)
        }
      })
      return res.status(200).json(cartaoAtualizado)
    } catch(error) {
      return res.status(500).json(error.message)
    }
  }

  static async deletaCartao(req, res) {
    const {id} = req.params
    try {
      await database.Cartoes.destroy({
        where: {
          id: Number(id)
        }
      })
      return res.status(200).json({ mensagem: `Cartão do ID ${id} apagado!`})
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}

module.exports = CartaoController