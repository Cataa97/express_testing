import { Sequelize } from "sequelize";
import * as dotenv from 'dotenv';
dotenv.config();

const db = new Sequelize(
    process.env.DB_DEV_NAME,
    process.env.DB_DEV_USER,
    process.env.DB_DEV_PASSWORD, {
    host: process.env.DB_DEV_HOST,
    dialect: 'postgres',
    port: process.env.DB_DEV_PORT,
    define: {
        timestamps: false
    },
});

export default db;
