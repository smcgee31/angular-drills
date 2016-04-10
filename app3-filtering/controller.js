angular.module('app').controller('mainCtrl', function($scope, mainSvc) {

    $scope.employeeList = mainSvc.myData();




});
