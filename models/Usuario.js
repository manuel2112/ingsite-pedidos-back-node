const { DataTypes } = require('sequelize');
const { db } = require('../config/db');

const Usuario =  db.define( 'usuario', {
    usuario_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    usuario_nombre: {        
        type: DataTypes.STRING,
        allowNull: false
    },
    usuario_login: {
        type: DataTypes.STRING,
        allowNull: false
    },
    usuario_pass: {
        type: DataTypes.STRING,
        allowNull: false
    },
    usuario_flag: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    usuario_perfil_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},{
    tableName: 'usuario'
});

module.exports = {
    Usuario
}