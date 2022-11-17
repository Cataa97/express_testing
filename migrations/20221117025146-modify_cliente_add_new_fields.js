
'use strict';
module.exports = {
  up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'clientes',   
        'telefono',   // creando nueva columna "telefono" de tipo INT en la tabla de clientes 
        {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
      ),
    ]);
  },

  down(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn('clientes', 'telefono'),
    ]);
  },
};
