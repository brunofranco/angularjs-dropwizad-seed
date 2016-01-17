(function() {
  this.app.controller('HomeCtrl', [
    "$scope", "$location", function($scope, $location) {
      return $scope.goTo = function(url) {
        return $location.url(url);
      };
    }
  ]);

}).call(this);
