var mongoose = require('mongoose');

var dbName = 'estudiantes'
mongoose.connect('mongodb://localhost/' + dbName);

module.exports = mongoose.model('Estudiante', {
  nombre: String,
  carrera: String,
  semestre: String,
  //fechanac: Date,
  matriculado : Boolean 
});