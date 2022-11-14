import { Sequelize } from "sequelize";

const db = new Sequelize("chocolateria", "postgres", "12345",
    {
        host: 'localhost',
        dialect: 'postgres',
        port: 5432,
        define: {
            timestamps: false
        },
    });



export default db;
