const {response} = require('express');
const { Usuario } = require('../models/Usuario');
const { generarJWT } = require('../helpers/jwt');

const crearUsuario = (req, res = response) => {

    const { name, email, password} = req.body;

    res.status(201).json({
        success: true,
        msg: 'Nuevo usuario',
        name, email, password
    });
}

const loginUsuario = async (req, res = response) => {

    const { user, pass} = req.body;

    try {

        const usuario = await Usuario.findOne({ where: { usuario_login: user, usuario_pass: pass } });

        if( !usuario ){

            return res.status(400).json({
                success: false,
                msg: 'Usuario/Contraseña no válidas'
            });

        }

        const token = await generarJWT( usuario.usuario_id, usuario.usuario_nombre, usuario.usuario_perfil_id);

        res.status(200).json({
            success: true,
            msg: 'Usuario existente',
            user_id: usuario.usuario_id,
            user_name: usuario.usuario_nombre,
            user_perfil: usuario.usuario_perfil_id,
            token
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            msg: 'Por favor hable con el administrador'
        });
    }

}

const revalidarToken = (req, res = response) => {

    const user_id       = req.user_id;
    const user_name     = req.user_name;
    const user_perfil   = req.user_perfil;
    const token         = req.token;

    res.json({
        success: true,
        msg: 'New TOKEN',
        user_id,
        user_name,
        user_perfil,
        token
    });
}

module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
}