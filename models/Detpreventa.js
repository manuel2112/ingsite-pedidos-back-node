const { DataTypes } = require('sequelize');
const { db } = require('../config/db');
const { Articulo } = require('./Article');

const Detpreventa =  db.define( 'detpreventas', {
    detpreventa_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    detpreventa_flag: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    preventa_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    codigo: {
        type: DataTypes.STRING,
        allowNull: true
    },
    articulo_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    detalle: {
        type: DataTypes.STRING,
        allowNull: true
    },
    cantidad: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    precio: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    despacho: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    aplicacion: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    total_retira: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    total_despacho: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    total_aplicacion: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
},{
    tableName: 'detpreventa'
});

Detpreventa.belongsTo(Articulo, { foreignKey: 'articulo_id'});

module.exports = {
    Detpreventa
}