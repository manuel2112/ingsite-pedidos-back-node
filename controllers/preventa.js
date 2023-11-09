const {response} = require('express');
const { Op, Sequelize } = require("sequelize");
const { Preventa } = require('../models/Preventa');
const { Parametro } = require('../models/Parameter');
const { Detpreventa } = require('../models/Detpreventa');
const { dateFormat } = require('../helpers/date');
const { Usuario } = require('../models/Usuario');
const { Articulo } = require('../models/Article');
const { Familia } = require('../models/Family');

const savePreventa = async (req, res = response) => {

    try {

        const { clienteId, clienteNmb, total, pedido} = req.body;

        const parametro = await Parametro.findOne();

        //INGRESAR PREVENTA 
        const preventaGuardar = await Preventa.create({
            fecha:              dateFormat().fecha,
            retira_codigo_id:   clienteId,
            retira_nombre:      clienteNmb,
            por_iva:            parametro.iva,
            usuario_id:         req.user_id,
            total,
        });

        const { preventa_id } = preventaGuardar;
        preventaGuardar.set({ numero: preventa_id });
        await preventaGuardar.save();

        //INGRESAR DETALLE        
        const objDetail = pedido.map( item => {
            return {
                preventa_id:        preventa_id,
                codigo:             item.articulos_codigo,
                articulo_id:        item.articulos_id,
                detalle:            item.articulos_descripcion,
                cantidad:           item.cantidad,
                precio:             item.valor,
                total_retira:       item.total
            }
        });        
        await Detpreventa.bulkCreate(objDetail);
    
        res.status(201).json({
            success: true,
            msg: `PEDIDO N° ${preventa_id} INGRESADO CON ÉXITO`,
            token: req.token
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            msg: 'Por favor hable con el administrador'
        });        
    }
}

const lastPreventa = async (req, res = response) => {

    try {

        const preventa = await Preventa.findAll({
            order:  [
                        ['preventa_id', 'DESC']
                    ],
            limit: 50
        });
    
        res.status(201).json({
            success: true,
            preventa,
            token: req.token
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            msg: 'Por favor hable con el administrador'
        });        
    }
}

const getById = async (req, res = response) => {

    try {

        const { id } = req.params;

        const preventa = await Preventa.findOne({
            where: {
                preventa_id: id
            },
            include: [
                { 
                    model: Detpreventa, 
                    include: [
                        {
                            model: Articulo,
                            include: [
                                {
                                    model: Familia
                                }
                            ]
                        }
                    ] 
                },
                { 
                    model: Usuario,
                }
            ]
        });
    
        res.status(201).json({
            success: true,
            preventa,
            token: req.token
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            msg: 'Por favor hable con el administrador'
        });        
    }
}

const searchByDate = async (req, res = response) => {

    try {

        console.log(req.query);

        const {unica, desde, hasta} = req.query;
        let preventa = {};
        let caption  = '';

        console.log(unica);
        console.log(desde);
        console.log(hasta);

        if(unica != ''){

            caption = `RESULTADOS PARA ${dateFormat(`${unica} 00:00:00`).latina}`;

            preventa = await Preventa.findAll({
                where: {
                    fecha: unica
                },
                order:  [
                            ['preventa_id', 'DESC']
                        ]
            });

        }else{

            caption = `RESULTADOS ENTRE ${dateFormat(`${desde} 00:00:00`).latina} HASTA ${dateFormat(`${hasta} 00:00:00`).latina}`;

            preventa = await Preventa.findAll({
                where: {
                    fecha: {
                        [Op.between]: [desde, hasta]
                    }
                },
                order:  [
                            ['preventa_id', 'DESC']
                        ]
            });

        }
    
        res.status(201).json({
            success: true,
            caption,
            preventa,
            token: req.token
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
    savePreventa,
    lastPreventa,
    getById,
    searchByDate
}