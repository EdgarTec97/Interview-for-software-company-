'use strict'

const Alumno = require('../models/alumno');
const Matter = require('../models/materia');

const AlumnoController = {
	saveAlumno: function(req,res){
		const params = req.body;
		if (params.name && params.aPatern && params.aMatern && params.matter) {
			let alumno = new Alumno();
			alumno.name = params.name;
			alumno.aPatern = params.aPatern;
			alumno.aMatern = params.aMatern;
			alumno.matter = params.matter;
			alumno.save((err,alumnoStored)=>{
				if (err) return res.status(500).send({message: 'Error en la petición'});
				if(!alumnoStored) return res.status(404).send({message: 'No hay alumno por añadir'});
				return res.status(200).send({alumno: alumnoStored});
			});
		}else{
			return res.status(500).send({message: 'Rellena los campos correctamente'});
		}
	},
	deleteAlumno: function(req,res){
		const alumnoId = req.params.id;
		Alumno.findOneAndRemove({'_id':alumnoId},(err, alumnoRemoved)=>{
			if (err) return res.status(500).send({message: 'Error en la petición'});
			if(!alumnoRemoved) return res.status(404).send({message: 'No hay alumno por eliminar'});
			return res.status(200).send({alumno: alumnoRemoved});
		});
	},
	getAlumnos: function(req,res){
		Alumno.find({}).populate('matter').exec((err,alumnos)=>{
			if (err) return res.status(500).send({message: 'Error en la petición'});
			if(!alumnos) return res.status(404).send({message: 'No hay materia por mostrar'});
			return res.status(200).send({alumnos: alumnos});
		});
	}
}
module.exports = AlumnoController;