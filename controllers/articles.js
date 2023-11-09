const {response} = require('express');
const { Op } = require("sequelize");
const { Parametro } = require('../models/Parameter');
const { Articulo } = require('../models/Article');
const { Familia } = require('../models/Family');

const getArticles = async (req, res = response) => {

    try {
    
        const token     = req.token;
        let articulos   = {};
        const [parameter, familias] = await Promise.all([
            Parametro.findOne(),
            Familia.findAll({ 
                where: 
                    { 
                        familia_flag: false, 
                    }, 
                order:  
                    [ 
                        ['familia_nombre', 'ASC'] 
                    ]
            })
        ]);
    
        if( parameter.validar_stock ){
            articulos = await Articulo.findAll({
                                where: {
                                    articulos_stock: { [Op.gt]: 0 },
                                },
                                order: [
                                    ['articulos_descripcion', 'ASC']
                                ],
                                include: [
                                    { model: Familia, as: 'familia' }
                                ]
                            })
        }else{
            articulos = await Articulo.findAll({
                                order: [
                                    ['articulos_descripcion', 'ASC']
                                ],
                                include: [
                                    { model: Familia, as: 'familia' }
                                ]
                            })
        }
    
        res.status(201).json({
            success: true,
            articulos,
            familias,
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
    getArticles
}