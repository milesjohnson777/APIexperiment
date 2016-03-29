var myApp = angular.module('myApp', ["ngRoute"]);

myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/viewall', {
        templateUrl: '/views/viewall.html',
        controller: "ListController"
    }).otherwise({
        redirectTo: '/views/index.html'
    });
}]);
