angular.module('app').controller('mainCtrl', function($scope, mainSvc) {

    $scope.test = 'working';

    $scope.employees = mainSvc.employees();




});
