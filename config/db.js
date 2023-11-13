const Sequelize = require('sequelize');

const db = new Sequelize(process.env.BD_DATABASE, process.env.BD_USER, process.env.BD_PASSWORD ?? '', {
        host: process.env.BD_HOST,
        port: process.env.BD_PORT,
        dialect: 'mysql',
        define: {
            timestamps: false
        },
        pool : {
            max:5,
            min: 0,
            acquire: 30000,
            idle: 10000,
        },
        timezone: 'America/Santiago',
    }
);

// db.authenticate().then(() => {
//     console.log(`Connection has been established successfully to ${process.env.BD_DATABASE}`);
// }).catch((error) => {
//     console.error('Unable to connect to the database: ', error);
// });


module.exports = {
    db
}