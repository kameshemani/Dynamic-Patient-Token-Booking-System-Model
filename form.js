src="Angular.min.js"
	
var formApp = angular.module("formModule",[]);

formApp.controller("formController", function($scope){
	
	var data = [ ]
$scope.data = data;

	$scope.addData = function(){
	$scope.data.push( $scope.newData);
	$scope.newData= '';

	$scope.removeData = function(data1){
		$scope.data.splice($scope.data.indexOf(data1),1)
	}
}
});