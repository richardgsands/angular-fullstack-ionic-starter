angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ThingsCtrl', function($scope, Things) {
  Things.all(function(err, things) {
  	$scope.things = things
  });
})

.controller('ThingDetailCtrl', function($scope, $stateParams, Things) {
  Things.get($stateParams.thingId, function(err, thing) {
  	$scope.thing = thing
  });
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableSomething: true
  };
});
