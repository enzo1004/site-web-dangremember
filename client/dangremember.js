var myModule = angular.module('Dangremember',
    [
        'ngRoute',
    ]);

myModule.config(function($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'src/association/tmpl/homepage/homepage.html',
            controller: 'homeController',
        })
		.when('/login', {
            templateUrl: 'src/adhesion/tmpl/login.html',
            controller: 'loginController',
        })
        .otherwise({redirectTo: '/'});

});

