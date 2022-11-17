
'use strict';
module.exports = {
  up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'pedidos', // creando nueva columna "retiro" tipo BOOLEAN con defaultvalue "true"
        'enviados',
        {
          type: Sequelize.BOOLEAN,
          defaultValue: false,
        },
      ),
    ]);
  },

  down(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn('pedidos', 'enviados'),
    ]);
  },
};