const { response } = require('express');
const { validationResult } = require('express-validator');

const validarCampos = ( req, res = response, next) => {

    //MANEJO DE ERRORES
    const errors = validationResult(req);
    if( !errors.isEmpty() ){
        return res.status(400).json({
            success: false,
            errors: errors.mapped()
        });
    }


    next();
}

module.exports = {
    validarCampos
}