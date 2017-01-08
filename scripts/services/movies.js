'use strict';

angular.module('movielist')
  .factory('MovieService', function($resource) {
    return $resource('/movies', {  }, {
      'get' : { method: 'GET'}
    });
  });
