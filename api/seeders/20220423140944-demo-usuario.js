'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Usuarios', [
      {
        nome: 'John Doe',
        email: 'john@doe.com',
        senha: '502321f',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Mária de Olivia',
        email: 'maria@gmail.com',
        senha: '502321f',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Bruno Fernandez',
        email: 'bruno@hotmail.com',
        senha: '8s51ss',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Romário Portugal',
        email: 'romario@gmail.com',
        senha: 's54a1s8a11',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Alessandro Vilas Boas',
        email: 'ale-vilaboas@gmail.com',
        senha: 'dx1x5as9a',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Usuarios', null, {});
  }
};
