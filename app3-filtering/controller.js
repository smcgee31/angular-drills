angular.module('app').controller('mainCtrl', function($scope, mainSvc) {

    $scope.employees = mainSvc.myData();




});
