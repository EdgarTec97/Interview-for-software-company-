'use strict'
const Matter = require('../models/materia');

const MatterController = {
	saveMatter: function(req,res){
		const params = req.body;
		let matter = new Matter();
		if (params.name && params.description) {
			matter.name = params.name;
			matter.description = params.description;
			matter.save((err,matterStored)=>{
				if (err) return res.status(500).send({message: 'Error en la petición'});
				if(!matterStored) return res.status(404).send({message: 'No hay materia por añadir'});
				return res.status(200).send({matter: matterStored});
			});
		}else{
			return res.status(500).send({message: 'Rellena los campos correctamente'});
		}
	},
	deleteMatter: function(req,res){
		const matterId = req.params.id;
		Matter.findOneAndRemove({'_id':matterId},(err,matterRemoved)=>{
			if (err) return res.status(500).send({message: 'Error en la petición'});
			if(!matterRemoved) return res.status(404).send({message: 'No hay materia por eliminar'});
			return res.status(200).send({matter: matterRemoved});
		});
	},
	getMatters: function(req,res){
		Matter.find({}).exec((err,matters)=>{
			if (err) return res.status(500).send({message: 'Error en la petición'});
			if(!matters) return res.status(404).send({message: 'No hay materia por mostrar'});
			return res.status(200).send({matters: matters});
		});
	}
}
module.exports = MatterController;
