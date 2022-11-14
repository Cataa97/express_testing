import Producto from "../models/producto.js";

export const getProductos = async (req, res) => {
    try {
        const producto = await Producto.findAll();
        res.send(producto);
    } catch (err) {
        console.log(err);
    }
}

export const getProductosById = async (req, res) => {
    try {
        const producto = await Producto.findByPk(req.params.id);
        if (!producto) {
            res.status(404).send({
                message: `No hay productos con id ${req.params.id}`
            });
        }
        res.send(producto)
    } catch (err) {
        console.log(err);
    }
}

export default getProductos;