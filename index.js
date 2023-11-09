const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { db } = require('./config/db');

const app = express();

//CONEXIÓN DDBB
const connectDB = async () => {
    try {
        await db.authenticate();
        console.log('Conexión correcta a la base de datos');
    } catch (error) {
        console.log(error);
    }
}
connectDB();

//CORS
app.use(cors());

//DIRECTORIO PÚBLICO
app.use( express.static('public') );

//LECTURA Y PARSEO PETICIONES
app.use( express.json() );

//RUTAS
app.use('/api/auth', require('./routes/auth') );
app.use('/api/article', require('./routes/articles') );
app.use('/api/client', require('./routes/clients') );
app.use('/api/preventa', require('./routes/preventa') );

//SERVIDOR
app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en el puerto ${ process.env.PORT }`);
});