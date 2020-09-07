(function () {
'use strict';

angular.module('LunchCheck',[])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController ($scope) {
	
	$scope.input = "";
	$scope.message = "";
	$scope.contadorcomas = function(){
	var contador = contadorsplit($scope.input);
	var cade=$scope.input;
	if (cade==0) $scope.message = "Please enter data first";
		else if (contador<=3) $scope.message= "Enjoy!";
				else $scope.message ="Too much!";};
	function contadorsplit(comidas){
		var separapalabras = comidas.split(',')
		var longitud = separapalabras.length;
		return longitud;	
	}
};})();	
