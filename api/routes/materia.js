'use strict'
const express = require('express');
const matterController = require('../controllers/materia');

let api = express.Router();

api.post('/saveMatter', matterController.saveMatter);
api.delete('/deleteMatter/:id', matterController.deleteMatter);
api.get('/getMatters', matterController.getMatters);

module.exports = api;