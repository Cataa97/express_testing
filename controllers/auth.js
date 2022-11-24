import jwt from "jsonwebtoken";  //generar token
import User from "../models/user.js";
import bcrypt from 'bcryptjs';

export const register = async (req, res) => {
    try {
        if (!req.body.user_email || !req.body.user_password || !req.body.user_nombre) {
            return res.status(400).send({
                message: "todas las credenciales son necesarias para inicar sesión"
            });
        }

        if (req.body.user_password.length < 6) {
            return res.status(400).send({
                message: "el password debe contener al menos 6 carácteres"
            });
        }

        if (!req.body.user_email.includes('@')) {
            return res.status(400).send({
                message: "El correo debe contener @"
            });
        }

        const user = await User.create({
            user_nombre: req.body.user_nombre,
            user_email: req.body.user_email,
            user_password: bcrypt.hashSync(req.body.user_password, 8) // se encripta la contraseña
        });
        res.status(201).json({
            "message": "Usuario creado",
            "user_id": user.user_id
        });
    } catch (err) {
        console.log('body', req.body)
        console.log(err);
    }
}
export const login = async (req, res) => {
    console.log(req.body);
    try {
        const user = await User.findOne({
            where: {
                user_email: req.body.user_email
            }
        })
        if (!user) {
            return res.status(404).send({
                message: `No se ha encontrado un usuario con este Email ${req.body.user_email}`
            });
        }
        const passwordIsValid = bcrypt.compareSync(
            req.body.user_password,
            user.user_password
        );
        if (!passwordIsValid) {
            return res.status(401)
                .send({
                    message: "Invalid Password"
                });
        }
        const token = jwt.sign({
            user_id: user.user_id,
            user_nombre: user.user_nombre,
        }, 'secret-key', {
            expiresIn: 86400
        });
        res.status(200)
            .send({
                user: {
                    user_id: user.user_id,
                    user_email: user.user_email,
                    user_nombre: user.user_nombre,
                },
                message: "Login successfull",
                accesToken: token,

            });
    } catch (err) {
        console.log(err);
    }

}


