'use strict'
let mongoose = require('mongoose');
let app = require('./app');
let port = 3800;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/crud',{useNewUrlParser: true, useUnifiedTopology: true})
	.then(()=>{
		console.log('Running crud database connection...');

		app.listen(port, ()=>{
			console.log('Server running in http://localhost:'+port);
		});
	})