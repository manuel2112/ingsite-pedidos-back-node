const { DataTypes } = require('sequelize');
const { db } = require('../config/db');

const Parametro =  db.define( 'parametro', {
    iva: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    folio_inicial_boletas: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    puntosventas_montoabrircaja: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    recargo_despacho: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    monto_despacho: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    validar_stock: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
},{
    tableName: 'parametros'
});

module.exports = {
    Parametro
}