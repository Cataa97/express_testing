import express from "express";
import {
    getProductos,
    getProductosById,
    createProductos,
    updateProductos,
    deleteProductos
} from "../controllers/producto.js";
import { isUserAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.get("/productos", isUserAuthenticated, getProductos);
router.get("/productos/:id", isUserAuthenticated, getProductosById);
router.post("/productos", isUserAuthenticated, createProductos);
router.put("/productos/:id", isUserAuthenticated, updateProductos);
router.delete("/productos/:id", isUserAuthenticated, deleteProductos);

export default router;

