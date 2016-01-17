
@app.config(['$routeProvider', ($routeProvider) ->
  $routeProvider
  .when("/", {
      templateUrl: 'home/home.html'
      controller: 'HomeCtrl'
    })
  .when("/search", {
      templateUrl: 'search/search.html'
      controller: 'SearchCtrl'
    })
  .otherwise({redirectTo: '/'});
]);
