'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      // Define attributes
      user_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      user_nombre: {
        type: Sequelize.STRING
      },
      user_email: {
        type: Sequelize.STRING
      },
      user_password: {
        type: Sequelize.STRING
      }
    }, {
      tableName: 'users'
    }

    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};