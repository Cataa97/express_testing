function runDotEnv() {
  if (process.env.ENV === 'development') {
    import('dotenv').then(dotenv => dotenv.config({ path: '.env' }));
  }
}

runDotEnv();
const config = {
  development: {
    username: process.env.DB_DEV_USER || 'postgres',
    password: process.env.DB_DEV_PASSWORD || '12345' ,
    database: process.env.DB_DEV_DB_NAME || 'chocolateria',
    host: process.env.DB_DEV_HOST || 'localhost' ,
    logging: console.log,
    dialect: 'postgres',
  },
  test: {
    username: process.env.DB_TEST_USER || 'postgres',
    password: process.env.DB_TEST_PASSWORD || '12345',
    database: process.env.DB_TEST_DB_NAME || 'chocolateria',
    host: process.env.DB_TEST_HOST || 'localhost',
    port: process.env.DB_TEST_PORT,
    logging: false,
    dialect: 'postgres',
  },
  production: {
    username: process.env.DB_DEV_USER,
    password: process.env.DB_DEV_PASSWORD,
    database: process.env.DB_DEV_DB_NAME,
    host: process.env.DB_DEV_HOST,
    logging: false,
    dialect: 'postgres',
  },
};

export default config;