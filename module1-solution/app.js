(function(){
"use strict";
  angular.module('assignmen1',[])
  .controller('LunchCheckcontroller',control);
  control.$inject=['$scope'];
  function  control($scope){
$scope.items="";
$scope.message="";

var words;
$scope.check= function(){
  words=$scope.items.split(",");
if(words.length>3)
$scope.message= "Too Much!";
else if(words.length<=3){
if(words.length==1&&words[0]=="")
$scope.message="please enter data first";
else
  $scope.message= "Enjoy!";
}


};


  }
})();
