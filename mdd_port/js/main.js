var app = angular.module('Port',[])

app.controller('Core',function($scope){
	$scope.title = 'hello world';

	$scope.list = ['Apples','Cats','Bear'];

	$scope.addNewItem = function(){
		$scope.list.push($scope.newItem);
	}
});