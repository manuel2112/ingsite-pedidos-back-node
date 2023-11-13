/**
    HOST + /api/client
 */

const express = require('express');
const router = express.Router();
const { validarJWT } = require('../middlewares/validar-jwt');
const { getClients, insertClient } = require('../controllers/clients');

router.get(
    '/',
    getClients 
);

router.post(
    '/',
    validarJWT,
    insertClient 
);


module.exports = router;