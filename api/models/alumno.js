'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var AlumnoSchema = Schema({
	name: String,
	aPatern: String,
	aMatern: String,
	matter: {type: Schema.ObjectId, ref: 'Materia'}
});
module.exports = mongoose.model('Almuno',AlumnoSchema);