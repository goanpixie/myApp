myApp.controller('showController', ['$scope', 'friendsFactory', '$routeParams', function($scope, friendsFactory, $routeParams) {
    // $scope.friend = {};
    var vm = $scope;
    console.log("We are at Show Controller");
    var show = function() {
        friendsFactory.show($routeParams.id, function(friend) {
            $scope.friend = friend;
        });
    };
    show();

}]);
