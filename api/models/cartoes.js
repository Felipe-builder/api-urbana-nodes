'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cartoes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Cartoes.init({
    numero_cartao: DataTypes.INTEGER,
    nome: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    tipo_cartao: DataTypes.ENUM('COMUM', 'ESTUDANTE', 'TRABALHADOR')
  }, {
    sequelize,
    modelName: 'Cartoes',
  });
  return Cartoes;
};