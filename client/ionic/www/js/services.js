angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Things', function($http) {
  // Might use a resource here that returns a JSON array

  return {
    all: function(cb) {
      $http.get('/api/things')
        .success(function(data, status, headers, config) {
          console.log(data);
          cb(null, data);
        });
    },
    get: function(thingId, cb) {
      console.log('GET /api/things/' + thingId);
      $http.get('/api/things/' + thingId)
        .success(function(data, status, headers, config) {
          console.log(thingId, data);
          cb(null, data);
        });
    }
  }
});
