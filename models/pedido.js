import { Sequelize } from "sequelize";
import db from "../config/database";
import Cliente from "./cliente";
import Producto from "./producto";


const { DataTypes } = Sequelize;

const Pedido = db.define('Pedido', {

    pedido_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    cliente_id: {
        type: DataTypes.INTEGER,
        field: 'cliente_id',
        references: {
            model: Cliente,
            key: 'id'
        }
    },
    producto_id: {  
        type: DataTypes.INTEGER,
        field: 'producto_id',
        references: {
            model: Producto,
            key: 'id'
        }
    },
    tableName: 'pedidos'
});

export default Pedido;