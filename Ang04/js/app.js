let app = angular.module('mModule',[]);
app.controller('HomeController',function($scope){
    $scope.data ='Orange';
    $scope.message = "Pakistan";

});
app.controller('FruitController',function($scope){
    $scope.fruitList = ['Apple','mango','Orange'];
});

app.controller('MobileController',function($scope){
   $scope.objMobile = {'id':1002,'mname':'Nokia','price':345.65}; 

});

app.controller('MobilesController',function($scope){
    $scope.mObj = [
        {'id':1002,'mname':'Nokia','price':345.65},
        {'id':1002,'mname':'Nokia','price':345.65},
        {'id':1002,'mname':'Nokia','price':345.65},
        {'id':1002,'mname':'Nokia','price':345.65}

    ];

});