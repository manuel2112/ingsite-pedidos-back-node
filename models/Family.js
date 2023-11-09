const { DataTypes } = require('sequelize');
const { db } = require('../config/db');

const Familia =  db.define( 'familias', {
    familia_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
    familia_flag: {        
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    familia_nombre: {        
        type: DataTypes.STRING,
        allowNull: false
    },
    impuesto_bebidas: {        
        type: DataTypes.FLOAT,
        allowNull: false
    },
    codigo_impuesto_sii: {        
        type: DataTypes.INTEGER,
        allowNull: false
    },
},{
    tableName: 'familia'
});

module.exports = {
    Familia
}