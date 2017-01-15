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
    // Function to handle reordering of the table
    $scope.orderBy = function(orderByColumn) {
      if ($scope.orderByColumn === orderByColumn) {
          $scope.direction = !$scope.direction;
      } else {
        $scope.orderByColumn = orderByColumn;
      }
    };
});
