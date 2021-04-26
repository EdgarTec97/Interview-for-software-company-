'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MatterSchema = Schema({
	name: String,
	description: String
});
module.exports = mongoose.model('Materia', MatterSchema);