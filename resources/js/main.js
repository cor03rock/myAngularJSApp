var app = angular.module ('myApp', []);
var apiKey = 'MDE4MTY0MjkyMDE0MjMwMzA1MDNjNDQyMQ001',
	nprURL = 'http://api.npr.org/query?id=61&fields=relatedLink,title,text,audio&output=JSON';

app.controller('SearchController', [ '$scope', function($scope){
	$scope.master	;

	$scope.search = function(songName){
		$scope.master = angular.copy(songName);
	};

}]);

// app.controller('PlayerController', [ '$scope', function($scope){
// 	$scope.playing = false;
// 	$scope.audio = document.createElement('audio');
// 	$scope.audio.src = "/resources/songs/Tremor.mp3";
// 	$scope.play = function (){
// 		$scope.audio.play()
// 		$scope.playing = true;
// 	};
// 	$scope.stop = function (){
// 		$scope.audio.pause();
// 		$scope.playing = false;
// 	};
// 	$scope.audio.addEventListener( 'ended', function() {
// 		$scope.$apply(function(){
// 			$scope.stop()
// 		});
// 	});
// }]);
app.controller('PlayerController', function($scope, $http){
	$http({

		method : 'JSONP',
		url    : nprURL + '&apiKey=' + apiKey + '&callback=JSON_CALLBACK'

	}).success(function(data, status){
		$scope.programs = data.list.story;
	}).error(function(data, status){

	});
});

