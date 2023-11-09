const { DataTypes } = require('sequelize');
const { db } = require('../config/db');
const { Familia } = require('./Family');

const Articulo =  db.define( 'articulo', {
    articulos_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    articulos_flag: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    articulos_codigo: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    articulos_descripcion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    articulos_stock: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    articulos_unidad: {
        type: DataTypes.STRING,
        allowNull: false
    },
    articulos_costo: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    articulos_venta: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    articulos_minimo: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    articulos_imagen: {
        type: DataTypes.STRING,
        allowNull: false
    },
    articulos_pesable: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    articulos_familia_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    articulos_ultimaactualizacion: {
        type: DataTypes.TIME,
        allowNull: false
    },
    articulos_usuario: {
        type: DataTypes.STRING,
        allowNull: false
    },
    articulos_codigobarra: {
        type: DataTypes.STRING,
        allowNull: false
    },
    articulos_control_stock: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    articulos_cambioprecio: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    articulos_conversioncompra: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    articulos_inicial: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    articulos_precioventa2: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    articulos_precioventa3: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    articulos_exento: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    articulos_frecuencia: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    articulos_utilidad: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    articulos_neto: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
},{
    tableName: 'articulos'
});

Articulo.belongsTo(Familia , { foreignKey: 'articulos_familia_id' });

module.exports = {
    Articulo
}