const { DataTypes } = require('sequelize');
const { db } = require('../config/db');

const Cliente =  db.define( 'clientes', {
    clientes_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
    empresas_id: {        
        type: DataTypes.INTEGER,
        allowNull: false
    },
    clientes_flag: {        
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    rut: {        
        type: DataTypes.STRING,
        allowNull: false
    },
    codigo: {        
        type: DataTypes.INTEGER,
        allowNull: false
    },
    razon: {        
        type: DataTypes.STRING,
        allowNull: false
    },
    giro: {        
        type: DataTypes.STRING,
        allowNull: false
    },
    direccion: {        
        type: DataTypes.STRING,
        allowNull: false
    },
    ciudad: {        
        type: DataTypes.STRING,
        allowNull: false
    },
    comuna: {        
        type: DataTypes.STRING,
        allowNull: false
    },
    fono1: {        
        type: DataTypes.STRING,
        allowNull: false
    },
    credito: {        
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    credito_monto: {        
        type: DataTypes.INTEGER,
        allowNull: false
    },
    atencion: {        
        type: DataTypes.STRING,
        allowNull: false
    },
    precio_esp: {        
        type: DataTypes.STRING,
        allowNull: false
    },
    cliente_email: {        
        type: DataTypes.STRING,
        allowNull: false
    },
    cliente_listaprecios: {        
        type: DataTypes.INTEGER,
        allowNull: false
    },
    precios_neto: {        
        type: DataTypes.INTEGER,
        allowNull: false
    },
},{
    tableName: 'clientes'
});

module.exports = {
    Cliente
}