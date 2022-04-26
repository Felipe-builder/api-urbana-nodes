const database = require('../models')

class UsuarioController {
  static async pegaTodosUsuario(req, res){
    try {
      const todosUsuarios = await database.Usuarios.findAll()
      return res.status(200).json(todosUsuarios)
    } catch(error) {
      return res.status(500).json(error.message)
    }
  }

  static async pegaUmUsuario(req, res) {
    try {
      const { id } = req.params
      const usuario = await database.Usuarios.findOne({
        where: {
          id: Number(id)
        }
      })
      return res.status(200).json(usuario)
    } catch(error) {
      return res.status(404).json(error.message)
    }
  }

  static async criaUsuario(req, res) {
    const novoUsuario = req.body
    try {
      const novoUsuarioCriado = await database.Usuarios.create(novoUsuario)
      return res.status(201).json(novoUsuarioCriado)
    } catch(error) {
      return res.status(400).json(error.message)
    }
  }

  static async atualizaUsuario(req, res) {
    const novosDados = req.body
    const { id } = req.params
    try {
      await database.Usuarios.update(novosDados, {
        where: {
          id: Number(id)
        }
      })
      const usuarioAtualizado = await database.Usuarios.findOne({
        where: {
          id: Number(id)
        }
      })
      return res.status(201).json(usuarioAtualizado)
    } catch(error) {
      return res.status(400).json(error.message)
    }
  }

  static async apagaUsuario(req, res) {
    const { id } = req.params
    try {
      await database.Usuarios.destroy({
        where: {
          id: Number(id)
        }
      })
      return res.status(200).json(`ID ${id} apagado com sucesso`)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async restauraUsuario(req, res) {
    const { id } = req.params
    try {
      await database.Usuarios.restore({
        where: {
          id: Number(id)
        }
      })
      return res.status(200).json(`ÌD ${id} restaurado com sucesso`)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async pegaCartoesUsuario(req, res) {
    const { usuarioId } = req.params
    try {
      const usuario = await database.Usuarios.findOne({ where: {id: Number(usuarioId)}})
      const cartoes = await usuario.getCartoesAtivos()
      return res.status(200).json(cartoes)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}

module.exports = UsuarioController