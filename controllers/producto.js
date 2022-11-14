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

export const createProductos = async (req, res) => {
    try {
        await Producto.create(req.body);
        res.json({
            "message": "Producto creado con éxito"
        })
    } catch (err) {
        console.log(err);
    }
}

export const deleteProductos = async (req, res) => {
    try {
        const producto = await Producto.findByPk(req.params.id);
        if (!producto) {
            res.status(404).send({
                mesagge: `No se han encontrado Productos por id ${req.params.id}`
            });
            return;
        }
        await Producto.destroy({
            where: {
                producto_id: req.params.id
            }
        });
        res.json({
            "message": "Producto Eliminado con éxito"
        });
    } catch (err) {
        console.log(err);
    }
}

export const updateProductos = async (req, res) => {
    try {
        const producto = await Producto.findByPk(req.params.id);
        if (!producto) {
            res.status(404).send({
                message: `No se han encontrado Productos por id ${req.params.id}`
            });
            return
        }
        await Producto.update(req.body, {
            where: {
                producto_id: req.params.id
            }
        });
        res.json({
            "message": "Producto actualizado con éxito"
        });
    } catch (err) {
        console.log(err);
    }
}
