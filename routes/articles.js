/**
    HOST + /api/article
 */

const express = require('express');
const { check } = require('express-validator');
const router = express.Router();
const { validarJWT } = require('../middlewares/validar-jwt');
const { validarCampos } = require('../middlewares/validar-campos');
const { getArticles } = require('../controllers/articles');


router.get(
    '/',
    validarJWT,
    getArticles 
);


module.exports = router;