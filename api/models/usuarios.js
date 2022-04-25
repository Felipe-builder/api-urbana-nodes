'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Usuarios extends Model {
    static associate(models) {
      Usuarios.hasMany(models.Cartoes, {
        foreignKey: 'usuario_id'
      })      
    }
  }
  Usuarios.init({
    nome: { 
      type: DataTypes.STRING,
      unique: true,
      validate: {
        funcaoValidadora: function(dado) {
          if (dado.length < 3) throw new Error('o campo nome deve ter mais de 3 caracteres')
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: {
          args: true,
          msg: 'dado do tipo e-mail inválido'
        }
      }
    },
    senha: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Usuarios',
    paranoid: true
  })
  return Usuarios
}