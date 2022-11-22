'use strict';
module.exports = {
  up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'productos', // creando nueva columna "productos" tipo BOOLEAN con defaultvalue "true"
        'retiros',
        {
          type: Sequelize.BOOLEAN,
          defaultValue: true,
        },
      ),
    ]);
  },
  down(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn('productos', 'retiros'),
    ]);
  },
};
