'use strict'
let express = require('express');
let bodyParser = require('body-parser');

let app = express();

//routes
let alumno = require('./routes/alumno.js');
let materia = require('./routes/materia.js');
//Middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
//cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
//routes
app.use('/api',alumno);
app.use('/api',materia);
//export
module.exports = app;