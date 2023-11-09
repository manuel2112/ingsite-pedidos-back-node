const { DataTypes } = require('sequelize');
const { db } = require('../config/db');
const { Detpreventa } = require('./Detpreventa');
const { Usuario } = require('./Usuario');

const Preventa =  db.define( 'preventas', {
    preventa_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    preventa_flag: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    numero: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    fecha: {
        type: DataTypes.DATEONLY,
        allowNull: true
    },
    total: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    observacion: {
        type: DataTypes.STRING,
        allowNull: true
    },
    contado: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    tarjeta: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    credito: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    transferencia: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    usuario_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    pago: {
        type: DataTypes.STRING,
        allowNull: true
    },
    nula: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    caja_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    subtotal: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    descuento: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    monto_pagado: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    vuelto: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    usuario_nula: {
        type: DataTypes.STRING,
        allowNull: true
    },
    exento: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    hora: {
        type: DataTypes.DATE,
        allowNull: true
    },
    iva: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    neto: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    por_iva: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    empleados_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    recargo: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    cheque_banco: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    cheque_restaurant: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    tipo_documento: {
        type: DataTypes.STRING,
        allowNull: true
    },
    forma_pago: {
        type: DataTypes.STRING,
        allowNull: true
    },
    documento: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    ocupado: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    retira: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    retira_codigo_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    retira_nombre: {
        type: DataTypes.STRING,
        allowNull: true
    },
    retira_direccion: {
        type: DataTypes.STRING,
        allowNull: true
    },
    retira_telefono: {
        type: DataTypes.STRING,
        allowNull: true
    },
    retira_referencia: {
        type: DataTypes.STRING,
        allowNull: true
    },
    turno: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
},{
    tableName: 'preventa'
});

Preventa.hasMany(Detpreventa, { foreignKey: 'preventa_id'});
Preventa.belongsTo(Usuario, { foreignKey: 'usuario_id'});

module.exports = {
    Preventa
}