/**
    HOST + /api/article
 */

const express = require('express');
const router = express.Router();
const { validarJWT } = require('../middlewares/validar-jwt');
const { getArticles } = require('../controllers/articles');


router.get(
    '/',
    validarJWT,
    getArticles 
);


module.exports = router;