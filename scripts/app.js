angular.module('movielist',['ngResource','ngRoute', 'ui.bootstrap'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/movietable.html',
        controller: 'MovielistCtrl',
         })
      .otherwise({
        redirectTo: '/'
		 });
 });
;
