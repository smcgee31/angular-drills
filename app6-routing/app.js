angular.module('appRouting', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home', {
        url: '/',
        templateUrl: 'homeTmpl.html',
        controller: 'mainCtrl'
    })
    .state('signup', {
        url: '/signup',
        templateUrl: 'signupTmpl.html',
        controller: 'mainCtrl'
    })
    .state('details', {
        url: '/details',
        templateUrl: 'detailsTmpl.html',
        controller: 'mainCtrl'
    });
});
