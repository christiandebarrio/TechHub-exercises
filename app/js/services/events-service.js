angular.module('techhubExercise').factory('eventsService',function($http){
  var url = 'https://cache.techhub.com/events';
  var events = [];

  return {
    getEvents: function() {
      return  $http.get('https://cache.techhub.com/events')
              // $http.jsonp(url, {
              //   params: {
              //     callback: 'JSON_CALLBACK',
              //     format: 'json'
              //   }
              // })
              .then(function(response){
                events = response;
                return events;
              });
    }
  };
});