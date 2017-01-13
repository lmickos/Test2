'use strict';

angular.module('movielist')
  .factory('MovieService', function($resource) {
    /** Exchange the 'movies' reference below to a URL for a real rest service
         This implementation uses a static local URL to emulate the REST data */
    return $resource('movies', {  }, {
      'get' : { method: 'GET'}
    });
  });
