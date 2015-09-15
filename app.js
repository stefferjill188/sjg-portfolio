'use strict';

// Declare app level module which depends on views, and components
angular.module('webPortfolio', [
  'ngRoute',
  'webPortfolio.templates'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/web'});
}]);
