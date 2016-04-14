angular.module('appRouting', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
    .state('home', {
        url: '/',
        templateUrl: 'home/home.html',
        controller: 'homeCtrl'
    })
    .state('signup', {
        url: '/',
        templateUrl: 'signup/signup.html',
        controller: 'signupCtrl'
    })
    .state('details', {
        url: '/',
        templateUrl: 'details/details.html',
        controller: 'detailsCtrl'
    });

    
});
