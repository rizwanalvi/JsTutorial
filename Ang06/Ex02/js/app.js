var myApp = angular.module('mModule',['ngRoute']);
myApp.controller('HomeController',function($scope){

    $scope.msg ='Home Controller';
});

myApp.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/home',{
        templateUrl:'home.html',
        controller:'HomeController'
    }).when('/product',{
            templateUrl:'product.html'

    }).otherwise({
        redirectTo:'home'
    })
}]);