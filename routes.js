var Estudiante = require('./models/estudiante');
var Controller = require('./controller');

module.exports = function(app) {

	app.get('/', function(req, res) {
		res.render('index.html');
	});

	app.get('/estudiante', Controller.getEstudiante);
	app.post('/estudiante', Controller.setEstudiante);
	app.put('/estudiante/:estudiante_id', Controller.updateEstudiante);
	app.delete('/estudiante/:estudiante_id', Controller.removeEstudiante);
};