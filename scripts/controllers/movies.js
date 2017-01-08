'use strict';

angular.module('movielist')
  .controller('MovielistCtrl', function($scope, MovieService) {
    $scope.movies = [];
    MovieService.get(function(data) {
      $scope.movies = data.Movies;
    });
});
