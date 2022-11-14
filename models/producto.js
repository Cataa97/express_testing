import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Producto = db.define('producto', {

    producto_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    producto_nombre: {
        type: DataTypes.STRING
    },
    producto_precio: {
        type: DataTypes.INTEGER
    },
    producto_stock: {
        type: DataTypes.INTEGER
    },
    producto_tipo: {
        type: DataTypes.STRING
    },

});

export default Producto;