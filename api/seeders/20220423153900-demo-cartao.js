'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Cartoes', [
      {
        numero_cartao: 1231,
        nome: 'Green-Nature',
        status: 1,
        tipo_cartao: 'COMUM',
        usuario_id: 1,
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      {
        numero_cartao: 8745,
        nome: 'Green-Nature Estudo',
        status: 1,
        tipo_cartao: 'ESTUDANTE',
        usuario_id: 2,
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      {
        numero_cartao: 8192,
        nome: 'Green-Nature Trabalho',
        status: 1,
        tipo_cartao: 'TRABALHADOR',
        usuario_id: 3,
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      {
        numero_cartao: 1023,
        nome: 'PREMIUM Colaborador',
        status: 1,
        tipo_cartao: 'TRABALHADOR',
        usuario_id: 4,
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      {
        numero_cartao: 1231,
        nome: 'PREMIUM',
        status: 0,
        tipo_cartao: 'COMUM',
        usuario_id: 5,
        createdAt: new Date(),
        updatedAt: new Date() 
      },
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Cartoes', null, {});
  }
};
