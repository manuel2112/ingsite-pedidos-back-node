/**
    HOST + /api/auth
 */

const express = require('express');
const { check } = require('express-validator');
const router = express.Router();
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');


router.post(
    '/new', 
    [
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'El Email es obligatorio').isEmail(),
        check('pass', 'El Password debe tener 4 caracteres mínimo').isLength({ min: 4 }),
        validarCampos
    ],
    crearUsuario 
);

router.post(
    '/', 
    [
        check('user', 'El Nombre de Usuario es obligatorio').not().isEmpty(),
        check('pass', 'El Password debe tener 4 caracteres mínimo').isLength({ min: 4 }),
        validarCampos
    ],
    loginUsuario 
);

router.get(
    '/renew',
    validarJWT,
    revalidarToken 
);


module.exports = router;