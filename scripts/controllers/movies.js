'use strict';

angular.module('movielist')
  .controller('MovielistCtrl', function($scope, MovieService) {
    // Initialize default values
    $scope.movies = [];
    $scope.orderByColumn = "Title";
    $scope.direction = false;
    // Load the movie data into memory
    MovieService.get(function(data) {
      $scope.movies = data.Movies;
    });
});
