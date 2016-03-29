myApp.controller("ListController", ['$scope', 'Rekkidz', function($scope, Rekkidz){
    Rekkidz.getRecord();
    $scope.data = Rekkidz.data;
}]);
