import express from "express";
import router from "./routes/routes.js";
import db from "./config/database.js";
import cors from "cors";
const app = express();
// use express json
app.use(express.json());

// var corsOptions = {
//   origin: 'http://example.com',
// }
app.use(cors());

// Testing database connection

try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
} catch (err) {
    console.error('Unable to connect to the database:');
}

// use Router
app.use(router);

app.listen(5000, () => console.log('Servidor corriendo en localhost 5000....'))