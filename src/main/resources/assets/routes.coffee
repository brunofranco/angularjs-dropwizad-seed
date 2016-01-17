
@app.config(['$routeProvider', ($routeProvider) ->
  $routeProvider
  .when("/", {
      templateUrl: 'home/home.html'
      controller: 'HomeCtrl'
    })
  .otherwise({redirectTo: '/'});
]);
