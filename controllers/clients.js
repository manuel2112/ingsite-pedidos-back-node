const {response} = require('express');
const { Op, Sequelize } = require("sequelize");
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

const insertClient = async (req, res = response) => {

    try {
        
        const token     = req.token;
        const {cliente} = req.body;

        const rut       = cliente.rut ;
        const nombre    = cliente.nombre ;
        const direccion = cliente.direccion ;
        const ciudad    = cliente.ciudad ;
        const fono      = cliente.fono ;
        const credito   = cliente.credito === 'SI' ? true : false ;
        const monto     = cliente.monto ;

        if( rut != '' ){
            const rutFormat = rut.length === 12 ? rut : `0${rut}`;
            const existe    = await Cliente.findOne({ where: { rut: rutFormat } });

            if( existe ){
                return res.status(201).json({
                    success: false,
                    msg: 'RUT INGRESADO PREVIAMENTE',
                    token
                });
            }

            let montoValido = 0;

            if ( credito ) {
                montoValido = monto != '' ? monto : 0;
            } else {
                montoValido = null;
            }
            
            const {dataValues} = await Cliente.findOne({ attributes: [[Sequelize.fn('max', Sequelize.col('codigo')), 'maxCodigo']] });
            const codigo = dataValues.maxCodigo + 1;
            
            const clienteNuevo = await Cliente.create({
                rut: rutFormat,
                razon: nombre,
                direccion: direccion,
                ciudad: ciudad,
                fono1: fono,
                credito: credito,
                credito_monto: montoValido,
                codigo: codigo
            });
            
    
            return res.status(201).json({
                success: true,
                msg: 'CLIENTE INGRESADO EXITOSAMENTE',
                cliente: clienteNuevo,
                token
            });

        }
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            msg: 'Por favor hable con el administrador'
        });        
    }
}

module.exports = {
    getClients,
    insertClient
}