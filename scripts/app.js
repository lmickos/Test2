'use strict';
var app = angular.module('movielist',['ngResource','ngRoute', 'ui.bootstrap']);
app.config(function ($routeProvider) {
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
app.filter('highlight', function ($sce) {
  return function(text,highlighted){
    var newtext = text;
    if (highlighted) newtext = text.replace(new RegExp(highlighted, 'gi'),'<mark>$&</mark>');
    return $sce.trustAsHtml(newtext);
  }
});
app.filter('movieFilter', function () {
  return function(list, country, writer, genre){
    var out=[];
    angular.forEach(list, function(movie){
      if (writer && movie.Writer.toUpperCase().indexOf(writer.toUpperCase())===-1) return;
      if (country && movie.Country.toUpperCase().indexOf(country.toUpperCase())===-1) return;
      if (genre && movie.Genre.toUpperCase().indexOf(genre.toUpperCase())===-1) return;
      out.push(movie);
    })
    return out;
  }
});
