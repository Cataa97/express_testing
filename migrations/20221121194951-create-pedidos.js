'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pedidos', {
      // Define attributes
      pedido_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      cliente_id: {
        type: Sequelize.INTEGER,
        field: 'cliente_id',
        references: {
          model: "clientes",
          key: 'cliente_id'
        }
      },
      producto_id:{
        type: Sequelize.INTEGER,
        field: 'producto_id',
        references :{
          model: "productos",
          key: 'producto_id'
        }
      }
  
    }, {
      tableName: 'pedidos'
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('pedidos');
  }
};
