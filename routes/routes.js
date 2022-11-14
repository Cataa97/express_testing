import express from "express";
import { getProductos } from "../controllers/producto.js";

const router = express.Router();

router.get("/productos", getProductos);

export default router;

