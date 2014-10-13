angular.module('EstudiantesApp', [])

function mainController($scope, $http) {
  $scope.newEstudiante = {};
  $scope.estudiantes = {};
  $scope.selected = false;

  $http.get('/estudiante').success(function(data) {
    $scope.estudiantes = data;
  })
  .error(function(data) {
    console.log('Error: ' + data);
  });

  $scope.registrarEstudiante = function() {
    $http.post('/estudiante', $scope.newEstudiante)
    .success(function(data) {
        $scope.newEstudiante = {}; 
        $scope.estudiantes = data;
      })
    .error(function(data) {
      console.log('Error: ' + data);
    });
  };

  $scope.modificarEstudiante = function(newEstudiante) {
    $http.put('/estudiante/' + $scope.newEstudiante._id, $scope.newEstudiante)
    .success(function(data) {
        $scope.newEstudiante = {}; 
        $scope.estudiantes = data;
        $scope.selected = false;
      })
    .error(function(data) {
      console.log('Error: ' + data);
    });
  };

  $scope.borrarEstudiante = function(newEstudiante) {
    $http.delete('/estudiante/' + $scope.newEstudiante._id)
    .success(function(data) {
      $scope.newEstudiante = {};
      $scope.estudiantes = data;
      $scope.selected = false;
    })
    .error(function(data) {
      console.log('Error: ' + data);
    });
  };

  $scope.selectEstudiante = function(estudiante) {
    $scope.newEstudiante = estudiante;
    $scope.selected = true;
    console.log($scope.newEstudiante, $scope.selected);
  };
}