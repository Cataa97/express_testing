'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('productos', {
      // Define attributes
      producto_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      producto_nombre: {
        type: Sequelize.STRING
      },
      producto_precio: {
        type: Sequelize.INTEGER
      },
      producto_stock: {
        type: Sequelize.INTEGER
      },
      producto_tipo: {
        type: Sequelize.STRING
      }
    }, {
      tableName: 'productos'
    }

    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('productos');
  }
};