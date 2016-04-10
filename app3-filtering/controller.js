angular.module('app').controller('mainCtrl', function($scope, mainSvc) {

    $scope.people = mainSvc.getPeople();




});
