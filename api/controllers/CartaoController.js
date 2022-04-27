const database = require('../models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

class CartaoController {
  static async pegaTodosCartoes(req, res){
    const { data_inicial, data_final } = req.query
    const where = {}
    data_inicial || data_final ? where.createdAt = {} : null
    data_inicial ? where.createdAt[Op.gte] = data_inicial : null
    data_final ? where.createdAt[Op.lte] = data_final : null
    
    try {
      const todosCartoes = await database.Cartoes.scope('todos').findAll({ where })
      return res.status(200).json(todosCartoes)
    } catch (error){
      return res.status(500).json(error.message)
    }
  }

  static async pegaCartoesAtivos(req, res) {
    try {
      const cartoesAtivos = await database.Cartoes.findAll()
      return res.status(200).json(cartoesAtivos)
    } catch (error) {
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

  static async restauraCartao(req, res) {
    const { id } = req.params
    try {
      await database.Cartoes.restore({
        where: {
          id: Number(id)
        }
      })
      return res.status(200).json({ mensagem: `Cartão do ID ${id} restaurado`})
    } catch(error) {
      return res.status(500).json(error.message)
    }
  }
}

module.exports = CartaoController