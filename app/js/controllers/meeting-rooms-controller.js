angular.module('techhubExercise')
.controller('MettingroomsController', function($http, $scope, $timeout){
  
  var client = contentful.createClient({
    space: 'a87ovfhrfgt0',
    accessToken: 'ae40d50dd4ea667e6e0d185395a4f58ae6f514383513ff2e368bffba7591022b'
  });

  client.getEntries({
    'content_type': 'meetingRoom'
  }).then(function(entries) {
    $timeout(function(){
    console.log(entries.items);
    $scope.rooms = entries.items;
    },0);
  });

});