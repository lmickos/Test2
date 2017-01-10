angular.module('movielist',['ngResource','ngRoute', 'ui.bootstrap'])
  .config(function ($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MovielistCtrl',
     })
    .when('/movietable', {
      templateUrl: 'views/movietable.html',
      controller: 'MovielistCtrl',
    })
    .when('/movielist', {
      templateUrl: 'views/movielist.html',
      controller: 'MovielistCtrl',
    })
      .otherwise({
        redirectTo: '/'
		 });
 });
;
