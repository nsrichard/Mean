var Estudiante = require('./models/estudiante');

exports.getEstudiante = function (req, res){
	Estudiante.find( function(err, estudiante) {
		if (err)
			res.send(err)
		res.json(estudiante);
	});
}

exports.setEstudiante = function(req, res) {

	Estudiante.create(
		{	
			nombre : req.body.nombre,
			carrera : req.body.carrera,
			semestre : req.body.semestre,
			//fechanac: req.body.fechanac, 
			matriculado: req.body.matriculado === 'on' ? true : false
		}, 
		function(err, estudiante) {
			if (err)
				res.send(err);

			Estudiante.find(function(err, estudiante) {
			 	if (err)
			 		res.send(err)
			 	res.json(estudiante);
			});

		});

}

exports.updateEstudiante = function(req, res){
	Estudiante.update( {_id : req.params.estudiante_id},
		{	
			$set:
			{
				nombre : req.body.nombre,
				carrera : req.body.carrera,
				semestre : req.body.semestre,
				//fechanac: req.body.fechanac, 
				matriculado: req.body.matriculado === 'on' ? true : false
			}
		}, 
		function(err, estudiante) {
			if (err)
				res.send(err);

		Estudiante.find(function(err, estudiante) {
		 	if (err)
		 		res.send(err)
		 	res.json(estudiante);
		});
	});
}

exports.removeEstudiante = function(req, res) {
	Estudiante.remove({_id : req.params.estudiante_id}, function(err, estudiante) {
		if (err)
			res.send(err);
		Estudiante.find(function(err, estudiante) {
			if (err)
				res.send(err)
			res.json(estudiante);
		});
	});
}