var app = angular.module ('myApp', []);

app.controller('SearchController', [ '$scope', function($scope){
	$scope.master	;

	$scope.search = function(songName){
		$scope.master = angular.copy(songName);
	};

}]);

app.controller('PlayerController', [ '$scope', function($scope){
	$scope.playing = false;
	$scope.audio = document.createElement('audio');
	$scope.audio.src = "/resources/songs/Tremor.mp3";
	$scope.play = function (){
		$scope.audio.play()
		$scope.playing = true;
	};
	$scope.stop = function (){
		$scope.audio.pause();
		$scope.playing = false;
	};
	$scope.audio.addEventListener( 'ended', function() {
		$scope.$apply(function(){
			$scope.stop()
		});
	});
}]);

app.controller('RelatedController', [ '$scope', function($scope){

}]);
