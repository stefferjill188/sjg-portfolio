angular.module('webPortfolio.templates',['ngRoute'])

.config(['$routeProvider', function($routeProvider){
	$routeProvider.
		when('/web', {
			templateUrl: 'templates/web.html',
			controller: 'WebCtrl'
		}).
		when('/web/:templateId', {
			templateUrl: 'templates/web-details.html',
			controller: 'WebDetailsCtrl'
		})
}])

.controller('WebCtrl', ['$scope','$http', function($scope, $http){
	$http.get('json/web.json').success(function(data){
		$scope.templates = data;
	});
}])

.controller('WebDetailsCtrl', ['$scope','$routeParams','$http','$filter', function($scope, $routeParams, $http, $filter){
	var templateId = $routeParams.templateId;
	$http.get('json/web.json').success(function(data){
		$scope.template = $filter('filter')(data, function(d){
			return d.id == templateId;
		})[0];
		$scope.mainImage = $scope.template.images[1].name;
	});
	$scope.setImage = function(image) {
		$scope.mainImage = image.name;
	}
}]);