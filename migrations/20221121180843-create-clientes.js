'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('clientes', {
      // Define attributes
      cliente_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      cliente_nombre: {
        type: Sequelize.STRING
      }
    },{
      tableName: 'clientes'
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('clientes');
  }
};