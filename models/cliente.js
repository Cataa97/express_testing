import { Sequelize } from "sequelize";
import db from "../config/database";

const { DataTypes } = Sequelize;

const Cliente = db.define('Cliente', {

    cliente_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    cliente_nombre: {
        type: DataTypes.STRING
    },
    tableName: 'clientes',
});

export default Cliente;