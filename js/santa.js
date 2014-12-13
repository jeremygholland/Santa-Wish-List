var app = angular.module('app', []);


function SantaCtrl($scope){
	$scope.wishes = [
	{text: ' I want a pony', done:false},
	{text: ' I want an XboxOne', done:false}
	];
$scope.getTotalWishes = function(){
	return $scope.wishes.length;
	};
$scope.addWishes = function(){
	$scope.wishes.push({text: $scope.NewWishes, done:false});
		$scope.NewWishes = '';
};
$scope.clearWishes = function(){
	$scope.wishes = _.filter($scope.wishes, function(wish){
		return !wish.done;
		if (!wish.done){
			$scope.class = "strike";
		}
	});
};

}



