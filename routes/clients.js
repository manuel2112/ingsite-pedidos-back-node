/**
    HOST + /api/client
 */

const express = require('express');
const { check } = require('express-validator');
const router = express.Router();
const { validarCampos } = require('../middlewares/validar-campos');
const { getClients } = require('../controllers/clients');


router.get(
    '/',
    getClients 
);


module.exports = router;