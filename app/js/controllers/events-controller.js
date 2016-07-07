angular.module('techhubExercise')
.controller('EventsController', function($scope, eventsService){

  eventsService.getEvents().
  then(function(response){
    $scope.events = response.data;
  });
  
});