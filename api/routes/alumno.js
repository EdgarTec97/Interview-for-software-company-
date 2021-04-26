'use strict'
const express = require('express');
const alumnoController = require('../controllers/alumno');

let api = express.Router();

api.post('/saveAlumno', alumnoController.saveAlumno);
api.delete('/deleteAlumno/:id', alumnoController.deleteAlumno);
api.get('/getAlumnos', alumnoController.getAlumnos);
module.exports = api;