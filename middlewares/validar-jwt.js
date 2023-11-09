const { response } = require('express');
const jwt = require('jsonwebtoken');
const { generarJWT } = require('../helpers/jwt');

const validarJWT = async ( req, res = response, next) => {

    const token = req.header('x-token');

    if( !token ){
        return res.status(401).json({
            success: false,
            msg: 'No hay token en la petición'
        });
    }
    
    try {

        const payload = jwt.verify(
            token,
            process.env.SECRET_JWT_SEED
        );
        
        req.user_id     = payload.user_id;
        req.user_name   = payload.user_name;
        req.user_perfil = payload.user_perfil;
        req.token       = await generarJWT( payload.user_id, payload.user_name, payload.user_perfil);
        
    } catch (error) {
        return res.status(401).json({
            success: false,
            msg: 'Token no válido'
        });
    }

    next();
}

module.exports = {
    validarJWT
}