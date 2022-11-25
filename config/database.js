import { Sequelize } from "sequelize";

import _config from "../config/config.js";

const env = process.env.ENV;
const config = _config [env];

const db = new Sequelize(
  "chocolateria",
  "postgres",
  "12345",
  {
    host: "localhost",
    dialect: 'postgres',
    define: {
      timestamps: false
    }
  },
  
);

export default db;