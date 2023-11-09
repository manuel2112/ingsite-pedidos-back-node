/**
    HOST + /api/preventa
 */

const express = require('express');
const { check } = require('express-validator');
const router = express.Router();
const { validarJWT } = require('../middlewares/validar-jwt');
const { validarCampos } = require('../middlewares/validar-campos');
const { savePreventa, lastPreventa, getById, searchByDate } = require('../controllers/preventa');


router.post(
    '/',
    validarJWT,
    savePreventa 
);

router.get(
    '/',
    validarJWT,
    lastPreventa 
);

router.get(
    '/get-by-id/:id',
    validarJWT,
    getById 
);

router.get(
    '/get-by-date',
    validarJWT,
    searchByDate 
);


module.exports = router;