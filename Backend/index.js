const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const Usuarioroutes = require('./Routes/Usuarioroutes')

const app = express();

// Middlewares
app.use(cors());
app.use(express.json()); // Para parsear application/json

// Configuración de la base de datos
// const db = mysql.createConnection({
//     host: 'tu-host',
//     user: 'tu-usuario',
//     password: 'tu-contraseña',
//     database: 'tu-base-de-datos'
// });

// db.connect(error => {
//     if (error) throw error;
//     console.log("Conectado exitosamente a la base de datos MySQL");
// });

// Definir rutas
// app.get('/', (req, res) => {
//     res.send('Hola Mundo desde Express!');
// });

app.use('/login', Usuarioroutes);

// Más configuraciones y rutas aquí

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
