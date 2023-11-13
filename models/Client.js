const { DataTypes } = require('sequelize');
const { db } = require('../config/db');

const Cliente =  db.define( 'clientes', {
    clientes_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    empresas_id: {        
        type: DataTypes.INTEGER,
        allowNull: true
    },
    clientes_flag: {        
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    rut: {        
        type: DataTypes.STRING,
        allowNull: true
    },
    codigo: {        
        type: DataTypes.INTEGER,
        allowNull: true
    },
    razon: {        
        type: DataTypes.STRING,
        allowNull: true
    },
    giro: {        
        type: DataTypes.STRING,
        allowNull: true
    },
    direccion: {        
        type: DataTypes.STRING,
        allowNull: true
    },
    ciudad: {        
        type: DataTypes.STRING,
        allowNull: true
    },
    comuna: {        
        type: DataTypes.STRING,
        allowNull: true
    },
    fono1: {        
        type: DataTypes.STRING,
        allowNull: true
    },
    credito: {        
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    credito_monto: {        
        type: DataTypes.INTEGER,
        allowNull: true
    },
    atencion: {        
        type: DataTypes.STRING,
        allowNull: true
    },
    precio_esp: {        
        type: DataTypes.STRING,
        allowNull: true
    },
    cliente_email: {        
        type: DataTypes.STRING,
        allowNull: true
    },
    cliente_listaprecios: {        
        type: DataTypes.INTEGER,
        allowNull: true
    },
    precios_neto: {        
        type: DataTypes.INTEGER,
        allowNull: true
    },
},{
    tableName: 'clientes'
});

module.exports = {
    Cliente
}