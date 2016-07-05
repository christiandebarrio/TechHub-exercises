angular.module('techhubExercise')
.config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'templates/pages/welcome.html',
      controller: 'WelcomeController',
      controllerAs: 'welcomeController'
    })

    .when('/meeting-rooms', {
      templateUrl: 'templates/pages/meeting-rooms/index.html',
      controller: 'MettingroomsController',
      controllerAs: 'meetingController'
    })

    .when('/booking-slots', {
      templateUrl: 'templates/pages/booking-slots.html',
      controller: 'BookingController',
      controllerAs: 'bookingController'
    })

    .when('/events', {
      templateUrl: 'templates/pages/events.html',
      controller: 'EventsController',
      controllerAs: 'eventsController'
    })

    .otherwise( { redirectTo: '/' } );
});