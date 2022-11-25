import express from "express";
import db from "./config/database.js";
import cors from "cors";
import Router from "./routes/routes.js";
import AuthRouter from "./routes/auth.js"
import helmet from "helmet";
const app = express();
app.use(express.json());

console.log(process.env.ENV);

app.use(express.json());

app.use(helmet());

app.use(cors());
try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
} catch (err) {
    console.error('Unable to connect to the database:');
}

app.use(Router);
app.use(AuthRouter);

export default app;
