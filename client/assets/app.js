var myApp = angular.module('myApp', ['ngRoute']);
//  use the config method to set up routing:
myApp.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'homeController'
    })

    .when('/friends', {
        templateUrl: 'partials/new.html',
        controller: 'newController'
    })


    .when('/show/:id', {
        templateUrl: 'partials/show.html',
        controller: 'showController'
    })

    .when('/friends/:id', {
        templateUrl: 'partials/edit.html',
        controller: 'editController'
    })

    .when('/friends/:id/delete', {
        templateUrl: 'partials/home.html',
        controller: 'homeController'
    })


    .otherwise({
        redirectTo: '/'
    });
});
