var myVegApp = angular.module('myVegApp',['ngRoute','ngAnimate']);

myVegApp.config(['$routeProvider', function($routeProvider){

  $routeProvider
  .when('/home',{
    templateUrl: 'views/homePage.html',
    controller:'VegController'
  })
  .when('/octobre',{
      templateUrl: 'views/saison.html',
      controller:'VegController'
  })
  .when('/directory',{
    templateUrl:'views/directory.html',
    controller:'VegController'
  }).otherwise({
    redirectTo:'/home'
  });
}]);

myVegApp.directive('randomVegetable' , [function(){
  return{
    restrict: 'E',
    scope: {
      vegetables: '=',
      title: '=',
    },
    templateUrl: 'views/random.html',
    transclude:true,
    replace:true,
    controller: function($scope){
      $scope.random = Math.floor(Math.random() * 4);
    }

  };
}]);

myVegApp.controller('VegController',['$scope','$http', function($scope, $http){


  $http.get('data/vegetables.json').then(function(response){
    $scope.vegetables = response.data;
  });

}]);
