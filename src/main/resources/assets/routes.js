(function() {
  this.app.config([
    '$routeProvider', function($routeProvider) {
      return $routeProvider.when("/", {
        templateUrl: 'home/home.html',
        controller: 'HomeCtrl'
      }).when("/search", {
        templateUrl: 'search/search.html',
        controller: 'SearchCtrl'
      }).otherwise({
        redirectTo: '/'
      });
    }
  ]);

}).call(this);
