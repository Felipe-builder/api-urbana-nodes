'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Cartoes', [
      {
        numero_cartao: 1231,
        nome: 'Green-Nature',
        status: 1,
        tipo_cartao: 'COMUM',
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      {
        numero_cartao: 8745,
        nome: 'Green-Nature Estudo',
        status: 1,
        tipo_cartao: 'ESTUDANTE',
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      {
        numero_cartao: 8192,
        nome: 'Green-Nature Trabalho',
        status: 1,
        tipo_cartao: 'TRABALHADOR',
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      {
        numero_cartao: 1023,
        nome: 'PREMIUM Colaborador',
        status: 1,
        tipo_cartao: 'TRABALHADOR',
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      {
        numero_cartao: 1231,
        nome: 'PREMIUM',
        status: 0,
        tipo_cartao: 'COMUM',
        createdAt: new Date(),
        updatedAt: new Date() 
      },
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Cartoes', null, {});
  }
};
