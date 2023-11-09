const {response} = require('express');
const { Op } = require("sequelize");
const { Cliente } = require('../models/Client');

const getClients = async (req, res = response) => {

    try {
        
        const token     = req.token;
        const clientes  = await Cliente.findAll({ 
            where: 
                { 
                    clientes_flag: false, 
                }, 
            order:  
                [ 
                    ['razon', 'ASC']
                ]
        })
    
        res.status(201).json({
            success: true,
            clientes,
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

module.exports = {
    getClients
}