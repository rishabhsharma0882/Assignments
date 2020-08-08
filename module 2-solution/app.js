(function(){
"use strict";

angular.module('myapp',[])
.controller('toBuy',control1)
.controller('bought',control2)
//.filter('filters',filter)
.service('service1',service1);



control1.$inject=['$scope','service1'];


function control1($scope,service1){
var list=this;

list.obj=service1.obj;

list.info=service1.info;


list.bought=function(value){
  service1.bought(value);

};


}

control2.$inject=['$scope','service1'];

function control2($scope,service1){

var list= this;

list.obj2=service1.obj2;
list.info=service1.info;


}





function service1(){

this.obj=[
  {name:'chicken',
  quantity:2
},

{
name:'mutton',
quantity:3
},

{name:"burger",
quantity:2
},

{name:"pizza",
quantity:3
},

{
  name:"curry",
  quantity:2
}

];

this.obj2=[];

this.info={message:"",message2:"Nothing Bought Yet"};


this.bought=function(value){


this.obj2.push(this.obj[value]);

this.obj.splice(value,1);

if(this.obj.length==0)
this.info.message="Everything is Bought";

if(this.obj2.length>0)
this.info.message2=" ";

};


}

})();
