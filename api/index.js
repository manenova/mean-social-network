'use strict'

var mongose = require('mongoose');
var app = require('./app');
var port = 3800;

//Conexion Database
mongose.Promise = global.Promise;
mongose.connect('mongodb://localhost:27017/mean-social', { useMongoClient: true})
        .then(() => {
            console.log("La conexión a la base de datos se realizo correctamente");

            //Crear Servidor
            app.listen(port, ()=>{
                console.log('Servidor corriendo en http://localhost:3800');
            });
        })
        .catch( err => console.log(err));

