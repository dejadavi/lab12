var app=angular.module("lab12", []);

app.controller('ctrl', 
function($scope){/////inject scope to allow function to change model, view
    $scope.tasks=[];
    $scope.addTask=function(task){
        $scope.tasks.push(task);
    }
  



});

