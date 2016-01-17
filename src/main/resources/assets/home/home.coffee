@app.controller('HomeCtrl', ["$scope", "$location", ($scope, $location) ->
  $scope.goTo = (url) ->
    $location.url(url)
]);