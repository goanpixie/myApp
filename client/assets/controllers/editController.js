myApp.controller('editController', ['$scope', 'friendsFactory', '$routeParams', '$location', function($scope, friendsFactory, $routeParams, $location) {
    var vm = $scope;

    var edit = function() {
        friendsFactory.getFriend($routeParams.id, function(returnedData) {
            var date = new Date(returnedData.birthDate);
            date.toLocaleDateString('en-US');
            returnedData.birthDate = date;
            $scope.friend = returnedData;
        });
    }
    edit();

    $scope.update = function() {
        friendsFactory.update($routeParams.id, $scope.friend, function(result) {
            $location.url('/');
        })
    }
}]);