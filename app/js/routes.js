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

    .when('/booking', {
      templateUrl: 'templates/pages/bookings/booking.html',
      controller: 'BookingsController',
      controllerAs: 'bookingsController'
    })

    .when('/events', {
      templateUrl: 'templates/pages/events/index.html',
      controller: 'EventsController',
      controllerAs: 'eventsController'
    })

    .otherwise( { redirectTo: '/' } );
});