let myApp = angular.module('mApp',[]);
myApp.controller('HomeController',function($scope){
    $scope.msg = "Pakistan";
    $scope.data= ['Apple',"Mango",'Orange'];
    $scope.counter=0;
    $scope.incrementdata = function(){

        $scope.counter++;
    }

    $scope.decrementdata = function(){

        $scope.counter--;
    }

});

myApp.controller("TecController",function($scope){
    $scope.tech = [
        {'tname':'C#','like':0,'dislike':0},
        {'tname':'Java','like':0,'dislike':0},
        {'tname':'JavaScript','like':0,'dislike':0},
        {'tname':'Python','like':0,'dislike':0}
]

$scope.AddLikes =function(index){
    $scope.tech[index].like++;

}
$scope.AddDislikes =function(index){
    if($scope.tech[index].dislike !=1 ){
        $scope.tech[index].dislike++;
    }
    else{
        $scope.tech[index].dislike--;
    }
   

}
});