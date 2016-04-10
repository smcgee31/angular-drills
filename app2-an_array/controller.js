angular.module('arrayApp').controller('arrayController', function($scope, mainSvc) {

    $scope.employeeList = mainSvc.myData();




});
