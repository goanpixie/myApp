myApp.controller('homeController', ['$scope', 'friendsFactory', '$location', function($scope, friendsFactory, $location) {
    
    $scope.friends = []
    var index = function() {
        friendsFactory.index(function(returned_data) {
            $scope.friends = returned_data;
        });
    };
    index();

    $scope.deleteFriend = function(id){
    console.log("I am at homeController" +" "+id) 
        friendsFactory.delete(id, function (returned_data) {                 
            $scope.friends = returned_data;           
             //pass in some parameter after function to get it validated
             index()
        });

    };  
    

}]);