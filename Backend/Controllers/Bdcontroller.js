const express = require('express');
const mysql = require('mysql2/promise');

const bdcontroller = async (req, res) => {
  try {
    // const { username, password } = req.body;

    // Configura la conexión a la base de datos
    const connection = await mysql.createConnection({
      host: '127.0.0.1',
      user: 'root',
      password: '',
      database: 'tastetrek',
    });

    // // Realiza una consulta para verificar las credenciales
    // const [rows] = await connection.execute(
    //     'SELECT usuario, rol, estado FROM usuarios WHERE usuario = ? AND contraseña = ?',
    //     [username, password]
    //   );
  
    //   connection.end();

    //   res.json({ message: 'Acceso concedido', rows });
    console.log('Conectado a la base de datos MySQL!');
    // No olvides cerrar tu conexión cuando hayas terminado con ella
    await connection.end();

} catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error en el servidor', user: null, estado: null });
  }

};

module.exports = {
    bdcontroller,
};
      