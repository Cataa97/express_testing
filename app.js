import express from "express";
import router from "./routes/routes.js";
import db from "./config/database.js";
import cors from "cors";
import Router from "./routes/routes.js";
import AuthRouter from "./routes/auth.js"
import helmet from "helmet";
const app = express();
app.use(express.json());

// var corsOptions = {
//   origin: 'http://example.com',
// }
app.use(helmet());


app.use(cors());
try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
} catch (err) {
    console.error('Unable to connect to the database:');
}

app.use(router);
app.use(AuthRouter);

app.listen(4000, () => console.log('Servidor corriendo en localhost 4000....'))

export default app;
